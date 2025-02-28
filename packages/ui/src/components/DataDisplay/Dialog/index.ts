import {
  Dialog as DialogUI,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../dialog';
import { Content, type ContentProps } from './Dialog.Content';
// import { Trigger } from './Dialog.Trigger';

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
// export type { TriggerProps } from './Dialog.Trigger';

export type { ContentProps };
