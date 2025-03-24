export interface MenuDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface MenuItem {
  label: string;
  href: string;
  items?: MenuDropdownItem[];
}
