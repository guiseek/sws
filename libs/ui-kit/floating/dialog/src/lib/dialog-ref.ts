import { OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay'
import { Observable, Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
import { DialogConfig } from './interfaces/dialog-config.interface'


export class DialogRef<T = any> {
  private afterClosedSubject = new Subject<T>()
  private _action = new Subject<any>()
  constructor(
    private overlayRef: OverlayRef,
    private positionStrategy: GlobalPositionStrategy,
    public config: DialogConfig
  ) {
    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close()
      })

      this.overlayRef.keydownEvents().pipe(
        filter(event => event.key === 'Escape')
      ).subscribe(() => {
        this.close()
      })
    }
  }

  close(dialogResult?: T): void {
    this.afterClosedSubject.next(dialogResult)
    this.afterClosedSubject.complete()

    this.overlayRef.dispose()
  }
  // get tie(): Observable<any> {
  //   return this.tieSubject.asObservable()
  // }
  onAction() {
    return this._action.asObservable()
  }
  emitAction(action: any) {
    this._action.next(action)
  }
  afterClosed(): Observable<T> {
    return this.afterClosedSubject.asObservable()
  }
}

export interface Position {
  x: number
  y: number
}