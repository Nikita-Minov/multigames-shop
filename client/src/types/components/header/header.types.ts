export interface Link {
  name: string;
  url: string;
  isActive: boolean;
  id: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
export interface HeaderProps {
  links: Array<Link>;
  socialLinks: Array<SocialLink>;
  updateLinksArray: any;
  setMenuBar: any;
  menuBar: boolean;
}

export interface HeaderContainerProps {
  setMenuBar: any;
  menuBar:boolean;
}

export interface HeaderWrapperProps {
  menuBar: boolean;
}