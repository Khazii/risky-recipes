import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';
import { RecipesState } from 'src/app/states/recipes/store/recipes.state';
import { UserState } from 'src/app/states/user/store/user.state';

@Component({
  selector: 'app-recipes',
  template: `
    <mat-tab-group mat-stretch-tabs>
      <mat-tab label="Recipe Database">
        <recipe-filter></recipe-filter>
        <ng-container *ngIf="(recipeList$ | async)?.length > 0; else noResults">
          <recipe-card
            *ngFor="let recipe of recipeList$ | async"
            [recipe]="recipe"
          ></recipe-card>
        </ng-container>
      </mat-tab>
      <mat-tab label="Recently Viewed">
        <ng-container
          *ngIf="(recentRecipes$ | async)?.length > 0; else noResults"
        >
          <recipe-card
            *ngFor="let recipe of (recentRecipes$ | async)?.slice().reverse()"
            [recipe]="recipe"
          ></recipe-card>
        </ng-container>
      </mat-tab>
      <mat-tab label="Favourited Recipes">
        <ng-container *ngIf="(favRecipes$ | async)?.length > 0; else noResults">
          <recipe-card
            *ngFor="let recipe of favRecipes$ | async"
            [recipe]="recipe"
          ></recipe-card>
        </ng-container>
      </mat-tab>
    </mat-tab-group>

    <ng-template #noResults>
      <p>No results found</p>
    </ng-template>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
})
export class RecipesComponent {
  @Select(RecipesState.recipeList) recipeList$: Observable<ModelRecipeResult[]>;
  @Select(UserState.recentRecipes) recentRecipes$: Observable<
    ModelRecipeResult[]
  >;
  @Select(UserState.favRecipes) favRecipes$: Observable<ModelRecipeResult[]>;
}
