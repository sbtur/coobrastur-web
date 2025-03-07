import { MenuItem } from '@ui/components/Blocks/Navigation';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Menu } from '@ui/components/Navigation/Menu';
import { Sheet, SheetContent, SheetTrigger } from '@ui/components/sheet';
import { Menu as MenuIcon } from '@ui/lib/icons';

export const MenuMobile = ({ menus }: { menus: MenuItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="grid justify-items-center gap-1 text-text text-xs"
        >
          <Icon icon={MenuIcon} />
          Menu
        </button>
      </SheetTrigger>
      <SheetContent>
        <Menu.Root>
          <Menu.List>
            {menus.map(menu => (
              <Menu.Item key={menu.label}>
                <Menu.Link href={menu.href}>{menu.label}</Menu.Link>
              </Menu.Item>
            ))}
          </Menu.List>
        </Menu.Root>
      </SheetContent>
    </Sheet>
  );
};
