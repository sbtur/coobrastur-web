import { MENU_ITEMS } from '@components/Menu/helpers/menu';

import { MenuMobile } from './MenuMobile';

import { Button } from '@ui/components/button';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { ArrowRight, UserRound } from '@ui/lib/icons';

export const UserMobileNavigation = () => {
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
        <MenuMobile menus={MENU_ITEMS} />
      </div>
    </div>
  );
};
