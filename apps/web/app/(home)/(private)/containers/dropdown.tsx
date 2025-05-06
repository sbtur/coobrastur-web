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

interface Plan {
  id: string;
  name: string;
  type: string;
  badges: {
    type: 'warning' | 'neutral';
    label: string;
  }[];
  days: number;
  validity: {
    start: string;
    end: string;
  };
  installment?: {
    year: number;
    number: number;
  };
}

export interface DropdownProps {
  plans: Plan[];
  onClose?: () => void;
}

export const Dropdown = ({ plans, onClose }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(
    plans[0] || null
  );

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

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
                {plans.map(plan => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={`px-4 py-2 text-gray-500 text-left border-2 ${
                      selectedPlan?.id === plan.id
                        ? 'border-highlight'
                        : 'border-transparent'
                    } hover:border-highlight rounded-md bg-white`}
                  >
                    <p>
                      <span className="font-normal">{plan.name}</span>{' '}
                      <span className="font-semibold">
                        ({plan.days} Diárias)
                      </span>
                    </p>
                    {plan.installment && (
                      <p className="text-xs">
                        Ano {plan.installment.year} - Parcela{' '}
                        {plan.installment.number}
                      </p>
                    )}
                  </button>
                ))}

                <Separator className="my-4" />

                {selectedPlan && (
                  <>
                    <div className="space-y-1">
                      <div className="space-x-2">
                        {selectedPlan.badges.map((badge, index) => (
                          <Badge key={index} variant={badge.type}>
                            {badge.label}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="my-4">
                      <p className="font-primary font-bold text-lg text-white">
                        {selectedPlan.days} Diárias
                      </p>
                      <p className="font-primary text-xs text-white">
                        Validade: {selectedPlan.validity.start} a{' '}
                        {selectedPlan.validity.end}
                      </p>
                    </div>
                  </>
                )}

                <Button
                  variant="default"
                  className="w-full"
                  onClick={handleClose}
                >
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
