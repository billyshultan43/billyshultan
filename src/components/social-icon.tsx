import * as React from "react";
import { Linkedin, Mail, Phone, MapPin, Github } from "lucide-react";
import type { SocialLink } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
};

export function SocialIcon({
  social,
  className,
  size = 18,
}: {
  social: SocialLink;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[social.icon];
  if (!Icon) return null;
  const isLink =
    social.href.startsWith("http") ||
    social.href.startsWith("mailto") ||
    social.href.startsWith("tel");
  const Tag = isLink ? "a" : "span";
  return (
    <Tag
      href={isLink ? social.href : undefined}
      target={social.href.startsWith("http") ? "_blank" : undefined}
      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={social.name}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center border border-line text-secondary transition-colors duration-300 hover:border-accent hover:text-accent",
        className
      )}
    >
      <Icon size={size} />
    </Tag>
  );
}
