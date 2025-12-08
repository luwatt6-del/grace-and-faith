import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const form = await req.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  if (message.includes("http") || message.includes("link")) {
    return NextResponse.json({ error: "Spam blocked" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Grace & Faith <no-reply@gracefaith.org>",
    to: "graceandfaithministrys@yahoo.com",
    subject: "New Prayer Request",
    html: `
      <h2>Prayer Request Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Request:</strong> ${message}</p>
    `,
  });

  // Automatic pastoral follow-up email
  await resend.emails.send({
    from: "Grace & Faith <no-reply@gracefaith.org>",
    to: email,
    subject: "We received your prayer request",
    html: `
      <p>Dear ${name},</p>
      <p>Your prayer request has been received. Our pastoral team will reach out if needed.</p>
      <p>Grace and peace,</p>
      <p>Grace & Faith Ministries</p>
    `,
  });

  return NextResponse.json({ success: true });
}
