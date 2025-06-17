export interface QuickLinksType {
  title: string;
  links: {[key: string]: {text: string; href: string}};
}

export interface NavbarLinkType {
  links: {[key: string]: {text: string; href: string}};
}
