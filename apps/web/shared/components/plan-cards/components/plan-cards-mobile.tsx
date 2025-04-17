import { Icon } from '@coobrastur/ui/components/data-display/icon';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@coobrastur/ui/components/data-display/tabs';
import { Check } from '@coobrastur/ui/lib/icons';

import { PlanCard } from '../components/plan-card';
import { PLANS_CATEGORIES } from '../utils/plans-categories';

export const PlanCardsMobile = () => {
  return (
    <Tabs defaultValue="Silver" className="grid gap-1 p-0">
      <TabsList className="h-fit justify-between gap-2 px-4 mt-6">
        {PLANS_CATEGORIES.map(category => (
          <TabsTrigger
            value={category.name}
            key={category.name}
            className="group text-xs uppercase h-[75px] w-full px-4 pr-8 flex flex-col justify-center items-start border border-input rounded-md bg-primary-300 text-white relative data-[state=active]:text-text-body data-[state=active]:border-white data-[state=active]:bg-white"
          >
            Categoria <br />
            <strong>{category.name}</strong>
            <div className="absolute top-2 right-2 w-[17px] h-[17px] rounded-full bg-transparent border border-input flex items-center justify-center group-data-[state=active]:bg-highlight-100">
              <Icon
                icon={Check}
                variant="white"
                className="w-2 h-2 opacity-0 group-data-[state=active]:opacity-100"
              />
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      {PLANS_CATEGORIES.map(category => (
        <TabsContent value={category.name} key={category.name} className="m-0">
          <PlanCard category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
