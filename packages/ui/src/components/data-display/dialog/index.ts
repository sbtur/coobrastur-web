import {
  Dialog as DialogUI,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../dialog';
import { Content, type ContentProps } from './dialog-content';
// import { Trigger } from './dialog-trigger';

export const Dialog = {
  Root: DialogUI,
  Close: DialogClose,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Title: DialogTitle,
  Trigger: DialogTrigger,
  Content,
};
// export type { TriggerProps } from './dialog-trigger';

export type { ContentProps };
