"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function SubscribeButton() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      style={{
        padding: "10px 20px",
        background: "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {loading ? "Processing..." : "Subscribe"}
    </button>
  );
}
