import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxAnimationsModule } from 'ngx-animations';
import { MaterialModule } from '../core/modules/material.module';
import { PipesModule } from '../core/pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipes/components/recipe-card/recipe-card.component';
import { RecipeFilterComponent } from './recipes/components/recipe-filter.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    CommonModule,

    PipesModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxAnimationsModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
    RecipesComponent,
    RecipeCardComponent,
    RecipeFilterComponent,
    AboutComponent,
  ],
  providers: [],
})
export class PagesModule {}
