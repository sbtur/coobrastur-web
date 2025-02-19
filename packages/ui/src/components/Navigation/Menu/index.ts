import { Menu as Root } from './Menu';
import { Content } from './Menu.Content';
import { Dropdown } from './Menu.Dropdown';
import { DropdownItem } from './Menu.Dropdown.Item';
import { DropdownLink } from './Menu.Dropdown.Link';
import { Item } from './Menu.Item';
import { Link } from './Menu.Link';
import { List } from './Menu.List';
import { Trigger } from './Menu.Trigger';

export type { MenuProps } from './Menu';

export const Menu = {
  Root,
  Content,
  Item,
  List,
  Trigger,
  Link,
  Dropdown,
  DropdownItem,
  DropdownLink,
} as const;
