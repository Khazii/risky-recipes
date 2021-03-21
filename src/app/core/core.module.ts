import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    LayoutModule,
    PagesModule,
  ],
  exports: [LayoutModule],
})
export class CoreModule {}
