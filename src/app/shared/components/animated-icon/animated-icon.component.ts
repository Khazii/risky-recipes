import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'animated-icon',
  template: `
    <mat-icon
      [ngClass]="{ animate: animate }"
      color="{{ animate ? colorEnd : colorStart }}"
      (click)="toggle()"
    >
      {{ animate ? end : start }}
    </mat-icon>
  `,
})
export class AnimatedIconComponent {
  @Input() start!: String;
  @Input() end!: String;
  @Input() colorStart!: String;
  @Input() colorEnd!: String;
  @Input() animate!: boolean;
  @Input() animateFromParent?: boolean = false;

  toggle() {
    if (!this.animateFromParent) this.animate = !this.animate;
  }
}
