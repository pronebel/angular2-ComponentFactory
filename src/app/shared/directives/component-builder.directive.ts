import { Directive, ComponentFactoryResolver, Input, ViewContainerRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[refComponentBuilder]'
})
export class ComponentBuilderDirective implements OnChanges {
  @Input('refComponentBuilder') refComponentBuilder;

  public dynamicComponent;

  constructor(private componentResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  ngOnChanges(changes): void {
    if (changes.refComponentBuilder) {
      this.viewContainerRef.clear();
      this.dynamicComponent = this.componentResolver.resolveComponentFactory(changes.refComponentBuilder.currentValue);
      this.viewContainerRef.createComponent(this.dynamicComponent);
    }
  }
}
