'use client';
import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '../responsive/responsive';
import { PlanCardsLarger } from './components/plan-cards-larger';
import { PlanCardsMobile } from './components/plan-cards-mobile';

export const PlanCards = () => {
  return (
    <>
      <ResponsiveSmallerThan breakpoint="md">
        <PlanCardsMobile />
      </ResponsiveSmallerThan>
      <ResponsiveLargerThan breakpoint="md">
        <PlanCardsLarger />
      </ResponsiveLargerThan>
    </>
  );
};
