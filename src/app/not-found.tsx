import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="section-container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-serif text-7xl font-normal text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-primary">Page not found</h1>
      <p className="mt-2 max-w-md text-sm text-secondary">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className={cn(buttonVariants(), "rounded-full")}
        >
          <Home size={16} /> Back home
        </Link>
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
        >
          <Compass size={16} /> View projects
        </Link>
      </div>
    </section>
  );
}
