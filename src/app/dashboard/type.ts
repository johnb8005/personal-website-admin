export interface Data {
  name: string;
  title: string;
  email: string;
  phone: string;
  picture: { src: string };
  links: { href: string; icon: string; name: string }[];
  linksFooter: { href: string; icon: string }[];
}
