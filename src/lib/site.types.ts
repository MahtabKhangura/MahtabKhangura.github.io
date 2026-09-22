export type SiteLink = {
  label: string;
  url: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  title: string;
  description: string;
  email?: string;
  avatar?: string;
  links: SiteLink[];
  nav: { label: string; href: string }[];
};
