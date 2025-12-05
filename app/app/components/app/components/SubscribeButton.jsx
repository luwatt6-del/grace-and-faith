"use client";
import { useState } from "react";

export default function SubscribeButton() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);

    const response = await fetch("/api/subscribe", {
      method: "POST",
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleSubscribe}
      className="rounded-2xl px-6 py-3 bg-blue-600 text-white text-lg shadow-md hover:bg-blue-700"
    >
      {loading ? "Processing..." : "Subscribe"}
    </button>
  );
}
