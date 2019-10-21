import { DialogHeader } from './dialog-header.interface';

export interface DialogConfig<T = any> {
  backdropClass: string;
  header?: DialogHeader;
  data?: T;
  width?: string;
  height?: string;
  withShell?:  boolean;
  disableClose: boolean;
  panelClass: string | string[];
  hasBackdrop?: boolean;
  draggable?: boolean;
}
