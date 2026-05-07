import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const FROM = "BAC Media <noreply@bacmedia.com>";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO = process.env.CONTACT_EMAIL ?? "hello@bacmedia.com";
    const body = await req.json();
    const { name, email, company, service, brief, source } = body;

    const isChat = source === "chat";
    const subject = isChat
      ? `New enquiry from chatbot — ${name ?? email}`
      : `New contact form submission — ${name}`;

    const html = isChat
      ? `<h2>Chatbot enquiry</h2><p><strong>From:</strong> ${name ?? "Unknown"} (${email})</p>${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}${brief ? `<p><strong>Project brief:</strong></p><pre style="white-space:pre-wrap">${brief}</pre>` : ""}`
      : `<h2>Contact form submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}${brief ? `<p><strong>Brief:</strong></p><pre style="white-space:pre-wrap">${brief}</pre>` : ""}`;

    await resend.emails.send({ from: FROM, to: TO, replyTo: email, subject, html });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
