import { NgModule } from '@angular/core';
import { MaterialModule } from '../core/modules/material.module';
import { AnimatedIconComponent } from './components/animated-icon/animated-icon.component';

@NgModule({
  imports: [MaterialModule],
  exports: [AnimatedIconComponent],
  declarations: [AnimatedIconComponent],
  providers: [],
})
export class SharedModule {}
