'use client';
import { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { Badge } from '@coobrastur/ui/components/data-display/badge';

import {
  buttonVariants,
  contentVariants,
  dropdownVariants,
} from './dropdown-plans.animations';

import { Icon } from '@ui/components/data-display/icon';
import { Separator } from '@ui/components/data-display/separator';
import { ChevronDown, ChevronUp } from '@ui/lib/icons';

export const DropdownPlans = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[280px] min-h-[70px]">
      <div className="absolute w-full rounded-[10px] shadow-md bg-primary">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-start justify-end text-white"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={buttonVariants}
                className="h-[30px] flex items-center gap-2 text-xs pt-4 pr-4"
              >
                Fechar
                <Icon
                  icon={ChevronUp}
                  variant="white"
                  className="w-[20px] h-[20px]"
                />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={buttonVariants}
                className="w-full h-[70px] flex align-middle items-center justify-center gap-2"
              >
                <span className="pr-4 font-primary text-lg font-bold">
                  Meus Planos
                </span>{' '}
                <Separator orientation="vertical" className="m-0 opacity-25" />
                <span className="grid h-fit pl-3 text-xs text-white  justify-items-center underline">
                  <Icon
                    icon={ChevronDown}
                    variant="white"
                    className="w-[15px] h-[15px]"
                  />
                  Ver planos
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="w-full p-6"
            >
              <motion.div variants={contentVariants} className="grid gap-4">
                <button className="px-4 py-2 text-white text-left border-2 border-highlight hover:border-highlight rounded-md">
                  <p className="font-semibold">Silver Master (#12190663)</p>
                  <p className="text-xs">Validade : 01/09/2023 a 31/08/2026</p>
                </button>
                <button className="px-4 py-2 text-neutral-300 text-left border border-neutral-300 hover:border-highlight rounded-md">
                  <p className="font-semibold">Silver Master (#12190663)</p>
                  <p className="text-xs">Validade : 01/09/2023 a 31/08/2026</p>
                </button>

                <div className="space-y-1">
                  <p className="text-xs text-neutral-300">#12190663</p>
                  <div className="space-x-2">
                    <Badge variant="neutral">Silver</Badge>
                    <Badge variant="warning">Master</Badge>
                  </div>
                </div>

                <div>
                  <p className="font-primary font-bold text-lg text-white">
                    7 Diárias
                  </p>
                  <p className="font-primary text-xs text-white">
                    Validade : 01/09/2023 a 31/08/2026
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
