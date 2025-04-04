'use client';

import { useState } from 'react';

import { Collapsible } from '@coobrastur/ui/components/data-display/collapsible';
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from '@coobrastur/ui/components/data-display/collapsible/collapsible';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { ArrowRight } from '@coobrastur/ui/lib/icons';

import { motion } from '@lib/motion';

const MotionCollapsibleContent = motion(CollapsibleContent);

export const CollapsibleDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible className="space-y-2" open={isOpen} onOpenChange={setIsOpen}>
      <MotionCollapsibleContent
        initial={false}
        animate={{
          height: isOpen ? 'auto' : '',
        }}
        transition={{
          duration: 3,
        }}
      >
        {children}
      </MotionCollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button variant="link" size="sm" className="p-0">
          {isOpen ? 'Mostrar menos' : 'Mostrar mais'}
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon icon={ArrowRight} variant="primary" size="sm" />
          </motion.span>
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
};
