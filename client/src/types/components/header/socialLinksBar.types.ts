export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SocialLinksBarProps {
  socialLinks: Array<SocialLink>
}