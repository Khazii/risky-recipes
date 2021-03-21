import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';
import { RemoveFavRecipe } from 'src/app/states/user/actions/remove-fav';
import { SetFavRecipe } from 'src/app/states/user/actions/set-fav';
import { SetRecentRecipe } from 'src/app/states/user/actions/set-recent';
import { UserState } from 'src/app/states/user/store/user.state';

@Component({
  selector: 'recipe-card',
  template: `
    <mat-card>
      <mat-card-header>
        <img mat-card-avatar [src]="recipe.thumbnail" />
        <mat-card-title>{{ recipe.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-chip-list>
          <mat-chip
            *ngFor="
              let ingredient of recipe.ingredients | titlecase | splitComma
            "
          >
            {{ ingredient }}
          </mat-chip>
        </mat-chip-list>
      </mat-card-content>
      <mat-card-actions fxLayout="row">
        <div fxLayoutAlign="end" fxFlex>
          <button mat-button color="primary" (click)="viewRecipe(recipe)">
            View Recipe
          </button>
          <button
            [color]="isFav ? 'warn' : 'default'"
            (click)="favouriteRecipe(recipe)"
            mat-icon-button
          >
            <mat-icon>favorite</mat-icon>
          </button>
        </div>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: [`./recipe-card.component.scss`],
})
export class RecipeCardComponent implements OnInit {
  @Select(UserState.favRecipes) favRecipes$: Observable<ModelRecipeResult[]>;

  @Input() recipe: ModelRecipeResult;

  isFav: boolean;

  constructor(private _snackBar: MatSnackBar, private _store: Store) {}

  ngOnInit(): void {
    this.favRecipes$.subscribe(
      (res) =>
        (this.isFav = res?.find((x) => x.href == this.recipe.href) != null)
    );
  }

  viewRecipe(recipe: ModelRecipeResult) {
    this._store.dispatch(new SetRecentRecipe(recipe));
    window.open(recipe.href, '_blank');
  }

  favouriteRecipe(recipe: ModelRecipeResult) {
    this.isFav
      ? this._store.dispatch(new RemoveFavRecipe(recipe))
      : this._store.dispatch(new SetFavRecipe(recipe));
  }
}
