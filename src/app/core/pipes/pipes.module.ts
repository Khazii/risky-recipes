import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace.pipe';
import { SplitCommaPipe } from './split-comma.pipe';

@NgModule({
  exports: [ReplacePipe, SplitCommaPipe],
  declarations: [ReplacePipe, SplitCommaPipe],
})
export class PipesModule {}
