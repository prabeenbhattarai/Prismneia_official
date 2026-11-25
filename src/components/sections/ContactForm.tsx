"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

const projectTypes = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Custom CRM & Software",
  "AI Integration",
  "AiTexTools or PDFella",
  "Something else",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="glass-panel flex flex-col items-center justify-center rounded-3xl border p-12 text-center">
        <span className="flex size-16 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan">
          <Check className="size-8" />
        </span>
        <h3 className="mt-6 text-3xl font-semibold">Message received</h3>
        <p className="mt-3 max-w-md text-lg text-foreground/80">
          Thanks for reaching out. We reply to every enquiry within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-6 rounded-3xl border p-7 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="field-label">Name</label>
          <input id="cf-name" required type="text" placeholder="Jane Smith" className="field" />
        </div>
        <div>
          <label htmlFor="cf-email" className="field-label">Work email</label>
          <input id="cf-email" required type="email" placeholder="jane@company.com" className="field" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-company" className="field-label">
          Company <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="cf-company" type="text" placeholder="Company name" className="field" />
      </div>

      <div>
        <label htmlFor="cf-type" className="field-label">What do you need help with?</label>
        <select id="cf-type" className="field">
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="field-label">Tell us about your project</label>
        <textarea
          id="cf-message"
          required
          rows={6}
          placeholder="What are you building, and what is getting in the way?"
          className="field resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-neon flex w-full items-center justify-center gap-2 rounded-full py-3 text-[15px] disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send message"}
        {!loading && <ArrowRight className="size-4" />}
      </button>
      <p className="text-center text-sm text-muted">We reply within one business day.</p>
    </form>
  );
}
