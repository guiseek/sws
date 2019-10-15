export type DialogAlertType = 'info' | 'help' | 'warn' | 'danger'

export interface DialogAlert {
  type: DialogAlertType
  message: string
}