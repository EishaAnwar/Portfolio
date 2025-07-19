// File: /pages/api/contact.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }

  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }

  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: `New message from ${fullName} via Portfolio`,
      reply_to: email,
      html: `
        <strong>Full Name:</strong> ${fullName}<br/>
        <strong>Email:</strong> ${email}<br/><br/>
        <strong>Message:</strong><br/>${message}
      `,
    });

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error("[Resend Error]", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email." });
  }
}
