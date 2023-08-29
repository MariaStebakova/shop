import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  @Input() borderColor!: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener("click") onClick(): void {
    const color = this.borderColor || "red";
    this.renderer.setStyle(this.elementRef.nativeElement, "border", `1px solid ${color}`);
  }
}
