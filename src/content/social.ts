import type { ContactInfo, SocialLink } from "@/lib/types";

export const contact: ContactInfo = {
  location: "Jakarta Barat, DKI Jakarta",
  phone: "+62 857-1161-6091",
  email: "billyshultan00@email.com",
  linkedin: "https://linkedin.com/in/billyshultan",
};

export const socials: SocialLink[] = [
  { name: "LinkedIn", href: "https://linkedin.com/in/billyshultan", icon: "linkedin" },
  { name: "Email", href: "mailto:billyshultan00@email.com", icon: "mail" },
  { name: "Phone", href: "tel:+6285711616091", icon: "phone" },
  { name: "Location", href: "#", icon: "mapPin" },
];
