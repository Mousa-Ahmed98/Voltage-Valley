import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardAnimation]',
  standalone: true
})
export class CardAnimationDirective {

  @HostListener('mouseover') over(){
    this.element.nativeElement.style.boxShadow = "0px 0px 5px 2px grey";
    //this.element.nativeElement.style.borderRadius  = "2px";
    //this.element.nativeElement.style.bacground = "";    
    this.element.nativeElement.style.cursor = "pointer";
  }

  @HostListener('mouseout') out(){
    this.element.nativeElement.style.boxShadow = "";
    this.element.nativeElement.style.cursor = "default";
  }
  constructor(private element: ElementRef) { }

}
