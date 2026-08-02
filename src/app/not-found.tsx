import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="section-container relative flex min-h-[calc(100dvh-80px)] flex-col items-start justify-center overflow-hidden">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-6 top-8 select-none font-serif text-[clamp(200px,30vw,420px)] font-medium uppercase leading-none"
      >
        404
      </span>
      <p className="label text-accent">404 / Signal lost</p>
      <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight text-primary sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-[17px] font-light leading-relaxed text-secondary">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
          <ArrowLeft size={15} /> Back home
        </Link>
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          View Work
        </Link>
      </div>
    </section>
  );
}
