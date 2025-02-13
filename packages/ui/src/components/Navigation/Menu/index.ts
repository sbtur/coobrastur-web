import { Menu as Root } from './Menu';
import { Content } from './Menu.Content';
import { Item } from './Menu.Item';
import { List } from './Menu.List';
import { Trigger } from './Menu.Trigger';
import { Link } from './Menu.Link';

export type { MenuProps } from './Menu';

export const Menu = {
  Root,
  Content,
  Item,
  List,
  Trigger,
  Link,
} as const;
