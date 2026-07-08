import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name: string;
      email: string;
      phone?: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL ?? "douglascampbell66@gmail.com";

    await resend.emails.send({
      from: "Adams Farm Website <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New puppy inquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#1B2A41;margin-bottom:4px">New inquiry — Adams Farm Labradoodles</h2>
          <p style="color:#666;font-size:13px;margin-bottom:24px">Submitted via adamsfarmlabradoodles.com</p>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 12px;background:#FAF7F0;border:1px solid #E2DAC7;font-weight:700;width:120px;font-size:14px">Name</td>
              <td style="padding:10px 12px;border:1px solid #E2DAC7;font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#FAF7F0;border:1px solid #E2DAC7;font-weight:700;font-size:14px">Email</td>
              <td style="padding:10px 12px;border:1px solid #E2DAC7;font-size:14px"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#FAF7F0;border:1px solid #E2DAC7;font-weight:700;font-size:14px">Phone</td>
              <td style="padding:10px 12px;border:1px solid #E2DAC7;font-size:14px">${phone ?? "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#FAF7F0;border:1px solid #E2DAC7;font-weight:700;font-size:14px;vertical-align:top">Message</td>
              <td style="padding:10px 12px;border:1px solid #E2DAC7;font-size:14px;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <p style="margin-top:20px;font-size:12px;color:#999">Reply to this email to respond directly to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
