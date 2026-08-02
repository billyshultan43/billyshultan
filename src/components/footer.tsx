import { contact } from "@/content/social";
import { Hairline } from "@/components/hairline";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-background">
      <div className="section-container py-14">
        <Hairline className="mb-10" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-secondary tracking-wider">
            &copy; {year} Billy Shultan Al Hadiy. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Electrical & IoT Systems
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">
              {contact.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
