export interface IMenuDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface IMenuItem {
  label: string;
  href: string;
  items?: IMenuDropdownItem[];
}
