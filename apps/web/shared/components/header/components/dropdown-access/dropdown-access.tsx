import { Text } from '@coobrastur/ui/components/data-display/text';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@coobrastur/ui/components/data-entry/popover';

import { Link } from '@components/link';

import { PAGE_NAME } from '@/shared/helpers/page-names';

import { Icon } from '@ui/components/data-display/icon';
import { Separator } from '@ui/components/data-display/separator';
import { Button } from '@ui/components/data-entry/button';
import { ChevronDown, CircleHelp, User } from '@ui/lib/icons';

export const DropdownAccess = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          Acessos <Icon icon={ChevronDown} variant="white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[245px] bg-background rounded-[20px] grid gap-4 p-5 text-center">
        <Button asChild>
          <Link href={PAGE_NAME.login}>
            Acessar Conta <Icon icon={User} variant="white" />
          </Link>
        </Button>
        <Separator />
        <div>
          <Text>Precisa de ajuda?</Text>
          <Link href="/" className="text-highlight underline font-bold">
            Central de Ajudas <Icon icon={CircleHelp} variant="primary" />
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};
