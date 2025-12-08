"use client";
import { useState } from "react";

export default function NewsletterPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: formData,
    });

    setMessage(res.ok ? "Subscribed successfully!" : "Error subscribing.");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Newsletter Subscription</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input type="email" name="email" required />
        <br /><br />

        <button type="submit">Subscribe</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
