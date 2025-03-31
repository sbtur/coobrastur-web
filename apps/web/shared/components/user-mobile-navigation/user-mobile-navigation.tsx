import { IMenuItem } from '@/shared/types/menu.types';

import { MenuMobile } from './menu-mobile';

import { Icon } from '@ui/components/data-display/icon';
import { Button } from '@ui/components/data-entry/button';
import { ArrowRight, UserRound } from '@ui/lib/icons';

type UserMobileNavigationProps = {
  menuItems: IMenuItem[];
};

export const UserMobileNavigation = ({
  menuItems,
}: UserMobileNavigationProps) => {
  return (
    <div className="w-[300px] mx-auto pb-[50px] relative">
      <div className="absolute -top-[20px] left-0 right-0 z-10 flex items-center justify-between gap-4 rounded-[10px] p-2 pr-5 bg-background shadow-lg">
        <Button>
          Assine Agora
          <Icon icon={ArrowRight} variant="white" />
        </Button>
        <button className="grid justify-items-center gap-1 text-text text-xs">
          <Icon icon={UserRound} />
          Acesso
        </button>
        <MenuMobile menus={menuItems} />
      </div>
    </div>
  );
};
