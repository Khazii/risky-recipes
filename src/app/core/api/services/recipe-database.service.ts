import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetRecipeList } from 'src/app/states/recipes/actions/set-recipes';
import { RecipeSearchQuery } from '../models/recipe-search.model';
import { ModelRecipeList } from '../models/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeDatabaseService {
  constructor(private _httpClient: HttpClient, private _store: Store) {}

  getRecipes(searchQuery: RecipeSearchQuery) {
    this._httpClient
      .get<ModelRecipeList>(
        `http://www.recipepuppy.com/api/?${searchQuery.ingredients}${searchQuery.search}&p=1`
      )
      .subscribe((res) => {
        this._store.dispatch(new SetRecipeList(res.results, searchQuery));
      });
  }
}
