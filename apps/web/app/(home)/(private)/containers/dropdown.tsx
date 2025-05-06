'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { AnimatePresence, motion } from '@lib/motion';
import {
  buttonVariants,
  contentVariants,
  dropdownVariants,
} from '@shared/components/header/components/dropdown-plans/dropdown-plans.animations';
import { Icon } from '@ui/components/data-display/icon';
import { ChevronDown, ChevronUp } from '@ui/lib/icons';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[280px] z-10">
      <div
        className={`relative w-full rounded-[10px] ${
          isOpen ? 'shadow-md bg-primary-200' : ''
        }`}
      >
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
                className="h-[30px] flex items-center gap-2 text-xs pt-4 pr-4"
              >
                Ver planos
                <Icon
                  icon={ChevronDown}
                  variant="white"
                  className="w-[15px] h-[15px]"
                />
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
                <button className="px-4 py-2 text-gray-500 text-left border-2 border-highlight hover:border-highlight rounded-md bg-white">
                  <p>
                    <span className="font-normal">Silver Master</span>{' '}
                    <span className="font-semibold">(7 Diárias)</span>
                  </p>
                  <p className="text-xs">Ano 1 - Parcela 6</p>
                </button>

                <Separator className="my-4" />

                <div className="space-y-1">
                  <div className="space-x-2">
                    <Badge variant="warning">Gold</Badge>
                    <Badge variant="neutral">Master</Badge>
                  </div>
                </div>

                <div className="my-4">
                  <p className="font-primary font-bold text-lg text-white">
                    7 Diárias
                  </p>
                  <p className="font-primary text-xs text-white">
                    Validade : 01/09/2023 a 31/08/2026
                  </p>
                </div>
                <Button variant="default" className="w-full">
                  Fechar
                </Button>
                <Link
                  href="/"
                  className="text-sm text-white underline text-center font-semibold"
                >
                  Mais informações do plano
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
