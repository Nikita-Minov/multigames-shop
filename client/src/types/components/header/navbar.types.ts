export interface Link {
  name: string;
  url: string;
  isActive: boolean;
}

export interface NavBarProps {
  links: Array<Link>;
  updateLinksArray: any;
}

export interface LinkProps {
  isActive: boolean;
}
