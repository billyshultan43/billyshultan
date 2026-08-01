import { contact } from "@/content/social";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 xl:px-[72px]">
        <p className="text-[13px] text-secondary">
          &copy; {year} Billy Shultan Al Hadiy. All rights reserved.
        </p>
        <p className="text-[13px] uppercase tracking-[0.2em] text-secondary">
          {contact.location}
        </p>
      </div>
    </footer>
  );
}
