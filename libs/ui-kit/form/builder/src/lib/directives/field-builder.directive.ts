import { Directive, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ElementBase } from '../elements/element-base';
import { FORM_ELEMENTS_MAPPER } from '../elements/form-elements';

@Directive({
  selector: '[swsFieldBuilder]'
})
export class FieldBuilderDirective extends ElementBase implements OnInit {
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
    super();
  }
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      FORM_ELEMENTS_MAPPER[this.field.type]
    );

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
