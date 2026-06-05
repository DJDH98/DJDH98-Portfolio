"use client";

import { Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    setSent(true);
    event.currentTarget.reset();
    window.location.href = `mailto:dalen@djdh98.dev?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-neutral-300">
          Name
          <input
            required
            name="name"
            placeholder="Your name"
            className="h-12 rounded-md border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-indigo-500"
          />
        </label>
        <label className="grid gap-2 text-sm text-neutral-300">
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="h-12 rounded-md border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-indigo-500"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-neutral-300">
        Message
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell me what you have in mind"
          className="resize-none rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-indigo-500"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-12 w-fit items-center gap-2 rounded-md bg-indigo-500 px-5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
      >
        {sent ? <Check size={17} /> : <Send size={17} />}
        {sent ? "Message noted" : "Send Message"}
      </button>
      {sent ? (
        <p className="text-sm text-neutral-400">
          Your email client should open with the message ready to send.
        </p>
      ) : null}
    </form>
  );
}
