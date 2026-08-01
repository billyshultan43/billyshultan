import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="section-container flex min-h-[calc(100dvh-72px)] flex-col items-start justify-center">
      <p className="label">404 / Signal lost</p>
      <h1 className="mt-7 font-serif text-5xl font-medium leading-[1.02] tracking-tight text-primary sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-7 max-w-md text-[17px] leading-relaxed text-secondary">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
          <ArrowLeft size={15} /> Back home
        </Link>
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          View projects
        </Link>
      </div>
    </section>
  );
}
