import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {wrapGrid} from 'animate-css-grid';
import {WrapGridConfig} from './wrap-grid-config';
import {WrapGridArguments} from 'animate-css-grid/dist/types';

@Directive({
  selector: '[ngxAnimateCssGrid]'
})
export class NgxAnimateCssGridDirective implements AfterViewInit, OnDestroy {

  @Input() ngxAnimateCssGrid: WrapGridConfig = {};
  @Output() onStart = new EventEmitter<HTMLElement[]>();
  @Output() onEnd = new EventEmitter<HTMLElement[]>();

  private gridWrapper: { unwrapGrid, forceGridAnimation };

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const config: WrapGridArguments = {
      ...this.ngxAnimateCssGrid,
      onStart: (animatedChildren) => this.onStart.emit(animatedChildren),
      onEnd: (animatedChildren) => this.onEnd.emit(animatedChildren)
    };
    this.gridWrapper = wrapGrid(this.elementRef.nativeElement, config);
  }

  unwrapGrid(): void {
    if (this.gridWrapper) {
      this.gridWrapper.unwrapGrid();
    }
  }

  forceGridAnimation(): void {
    if (this.gridWrapper) {
      this.gridWrapper.forceGridAnimation();
    }
  }

  ngOnDestroy(): void {
    this.unwrapGrid();
  }
}
