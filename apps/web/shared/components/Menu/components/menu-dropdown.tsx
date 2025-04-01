import { Link } from '@components/link';

import { IMenuItem } from '@/shared/types/menu.types';

import {
  MenuContent,
  MenuDropdown as MenuDropdownUI,
  MenuDropdownItem,
  MenuDropdownLink,
  MenuTrigger,
} from '@ui/components/navigation/menu';

export const MenuDropdown = ({ menu }: { menu: IMenuItem }) => (
  <>
    <MenuTrigger asChild>{menu.label}</MenuTrigger>
    <MenuContent>
      <MenuDropdownUI>
        {menu.items?.map(item => (
          <MenuDropdownItem key={item.label}>
            <Link href={item.href} passHref legacyBehavior>
              <MenuDropdownLink href={item.href}>
                <div className="text-primary leading-none text-lg font-bold">
                  {item.label}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                  {item.description}
                </p>
              </MenuDropdownLink>
            </Link>
          </MenuDropdownItem>
        ))}
      </MenuDropdownUI>
    </MenuContent>
  </>
);
