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

const inputClass =
  "w-full border bg-transparent px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent transition-colors duration-200";

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
      <div className="flex flex-col items-center justify-center border border-line bg-card/50 p-10 text-center">
        <CheckCircle2 size={36} className="text-accent" />
        <h3 className="mt-4 font-serif text-xl text-primary">Message ready</h3>
        <p className="mt-2 max-w-sm text-sm text-secondary">
          This is a local demo form, no message was actually sent. Please reach
          out via the contact details provided.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 h-10 border border-line px-5 text-sm font-medium text-primary transition-colors hover:border-primary"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          className={cn(
            inputClass,
            errors.name ? "border-red-700/50" : "border-line focus:border-accent"
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-700">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className={cn(
            inputClass,
            errors.email ? "border-red-700/50" : "border-line focus:border-accent"
          )}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-700">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          className={cn(
            inputClass,
            errors.message ? "border-red-700/50" : "border-line focus:border-accent"
          )}
          placeholder="How can we work together?"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-700">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[12px] border border-primary bg-primary text-[13px] tracking-wide text-background transition-colors duration-300 hover:border-accent hover:bg-accent disabled:opacity-60 active:translate-y-[1px]"
      >
        <Send size={15} /> {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
