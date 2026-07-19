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
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form submitted (local demo):", data);
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-card/50 p-10 text-center">
        <CheckCircle2 size={36} className="text-accent/60" />
        <h3 className="mt-4 text-lg font-semibold text-primary">Message ready</h3>
        <p className="mt-2 max-w-sm text-sm text-secondary">
          This is a local demo form — no message was actually sent. Please reach out via
          the contact details provided.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-xl border border-line bg-white/[0.03] px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-white/[0.06]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          className={cn(
            "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all duration-200",
            errors.name ? "border-red-500/50" : "border-line"
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className={cn(
            "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all duration-200",
            errors.email ? "border-red-500/50" : "border-line"
          )}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          className={cn(
            "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all duration-200",
            errors.message ? "border-red-500/50" : "border-line"
          )}
          placeholder="How can we work together?"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 shadow-[0_4px_20px_-4px_rgba(124,92,255,0.3)]"
      >
        <Send size={16} /> {isSubmitting ? "Sending\u2026" : "Send Message"}
      </button>
    </form>
  );
}
