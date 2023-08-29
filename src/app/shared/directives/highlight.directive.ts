import { Directive, ElementRef } from "@angular/core";


/**
 * Responsavel pelo gerenciamento de tipos de highlight
 */


@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroudColor = 'blue';
  }
}
