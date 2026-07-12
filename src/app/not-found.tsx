import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 max-w-md text-sm text-muted">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent-gradient px-6 text-sm font-medium text-white shadow-glow"
        >
          <Home size={16} /> Back home
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white hover:bg-white/10"
        >
          <Compass size={16} /> View projects
        </Link>
      </div>
    </section>
  );
}
