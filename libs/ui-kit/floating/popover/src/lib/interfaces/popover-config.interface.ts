export interface PopoverConfig<T = any> {
  backdropClass: string;
  data?: T;
  disableClose: boolean;
  panelClass: string | string[];
  arrowOffset?: number;
  arrowSize?: number;
}