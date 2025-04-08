import { Icon } from '@coobrastur/ui/components/data-display/icon';

import { FILTERS } from '../../../helpers/filters';

export const Filters = () => {
  return (
    <div className="h-full mx-auto flex gap-4 items-center justify-center">
      {FILTERS.map(filter => (
        <button
          key={filter.value}
          className="h-full group text-text-body text-base border-b-4 border-transparent hover:border-highlight-100 hover:text-highlight-100"
        >
          <Icon
            icon={filter.icon}
            variant="highlight"
            className="text-neutral-300 group-hover:text-highlight-100 mr-1 inline-block"
          />
          {filter.label}
        </button>
      ))}
    </div>
  );
};
