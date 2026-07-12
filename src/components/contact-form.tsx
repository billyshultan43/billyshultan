"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Local-only demo: no backend is configured.
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form submitted (local demo):", data);
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface/40 p-10 text-center">
        <CheckCircle2 size={40} className="text-secondary" />
        <h3 className="mt-4 text-lg font-semibold text-white">Message ready</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          This is a local demo form — no message was actually sent. Please reach out via
          the contact details provided.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          className={cn(
            "w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60",
            errors.name ? "border-red-500/60" : "border-white/10"
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className={cn(
            "w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60",
            errors.email ? "border-red-500/60" : "border-white/10"
          )}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          className={cn(
            "w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/60",
            errors.message ? "border-red-500/60" : "border-white/10"
          )}
          placeholder="How can we work together?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent-gradient text-sm font-medium text-white shadow-glow transition-all hover:brightness-110 disabled:opacity-60"
      >
        <Send size={16} /> {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
