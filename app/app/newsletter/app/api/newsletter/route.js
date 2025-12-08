import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const form = await req.formData();
  const email = form.get("email");

  // Simple spam protection
  if (email.includes("spam") || email.includes("viagra")) {
    return NextResponse.json({ error: "Spam blocked" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Grace & Faith <no-reply@gracefaith.org>",
    to: email,
    subject: "Newsletter Subscription",
    html: `
      <h2>Welcome!</h2>
      <p>You are now subscribed to our ministry newsletter.</p>
    `,
  });

  return NextResponse.json({ success: true });
}
