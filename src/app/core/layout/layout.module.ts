import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material.module';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    PipesModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class LayoutModule {}
