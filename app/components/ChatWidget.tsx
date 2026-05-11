"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";

const GREETING = "Hi — I'm here to help you get in touch with the BAC Media team. What are you working on?";

function getMessageText(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter((p) => p.type === "text" && typeof p.text === "string" && p.text.length > 0)
    .map((p) => p.text as string)
    .join("");
}

const transport = new DefaultChatTransport({ api: "/api/chat" });

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport,
    onFinish: async ({ message }) => {
      const text = getMessageText(message.parts as Array<{ type: string; text?: string }>);
      const marker = "[SEND_ENQUIRY]";
      if (text.includes(marker)) {
        const jsonStr = text.slice(text.indexOf(marker) + marker.length).trim();
        try {
          const data = JSON.parse(jsonStr);
          await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, source: "chat" }),
          });
          setSent(true);
        } catch {
          // JSON parse failed, don't block UX
        }
      }
    },
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const visibleMessages = useMemo(
    () =>
      messages
        .map((m) => {
          const raw = getMessageText(m.parts as Array<{ type: string; text?: string }>);
          const text = raw.replace(/\[SEND_ENQUIRY\][\s\S]*$/, "").trim();
          return { id: m.id, role: m.role, text };
        })
        .filter((m) => m.text.length > 0),
    [messages]
  );

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input.trim() });
    setInput("");
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#ffdd15] text-black shadow-lg hover:bg-yellow-300 transition-colors duration-200"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col bg-[#0c0c0c] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
          style={{ width: "360px", maxWidth: "calc(100vw - 3rem)" }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-900">
            <span className="rule-yellow" />
            <div>
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-white">BAC Media</p>
              <p className="text-[10px] text-zinc-600 tracking-wide">Enquiry assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="overflow-y-auto px-5 py-4 space-y-4" style={{ maxHeight: "20rem" }}>
            {/* Hardcoded greeting — never sent to the API */}
            <div className="flex justify-start">
              <div className="max-w-[85%] px-4 py-2.5 rounded-xl text-sm leading-relaxed bg-zinc-900 text-zinc-300 border border-zinc-800">
                {GREETING}
              </div>
            </div>
            {visibleMessages.map((m) =>
              m.text ? (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#ffdd15] text-black font-medium"
                        : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ) : null
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-xl flex gap-1.5 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {sent && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-xl text-sm text-zinc-400">
                  <span className="text-[#ffdd15] mr-2">✓</span>
                  Your enquiry has been sent. The team will be in touch within one business day.
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {!sent && (
            <form onSubmit={handleSend} className="flex items-center gap-3 px-4 py-3 border-t border-zinc-900">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                disabled={isLoading}
                className="flex-1 bg-transparent text-sm text-white placeholder-zinc-700 outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="shrink-0 flex items-center justify-center rounded-full bg-[#ffdd15] text-black disabled:opacity-40 hover:bg-yellow-300 transition-colors"
                style={{ width: "2rem", height: "2rem" }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
