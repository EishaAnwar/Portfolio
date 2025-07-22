import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, message } = body;

    if (!fullName || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // 1️⃣ Send form submission to YOU
    const internalResponse = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL, // e.g., contact@eishaanwar.me
      to: process.env.RESEND_TO_EMAIL, // your personal inbox
      subject: `New message from ${fullName} via Portfolio`,
      reply_to: email,
      html: `
        <strong>Full Name:</strong> ${fullName}<br/>
        <strong>Email:</strong> ${email}<br/><br/>
        <strong>Message:</strong><br/>${message}
      `,
    });

    // 2️⃣ Auto-reply to the user
    const autoReply = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL, // must match verified sender domain
      to: email,
      subject: `Thanks for reaching out, ${fullName}!`,
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for contacting me through my portfolio. I’ve received your message and will get back to you as soon as possible.</p>
        <p>Thank you for contacting me through my portfolio. I’ve received your message and will get back to you as soon as possible.</p>
        <p>Have a great day!<br/>— Eisha</p>
      `,
    });

    return Response.json({
      success: true,
      data: {
        internal: internalResponse,
        autoReply,
      },
    });
  } catch (error) {
    console.error("[Resend Error]", error);
    return Response.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
