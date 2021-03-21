import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetRecipeList } from '../actions/set-recipes';
import { RecipeSearchQuery } from 'src/app/core/api/models/recipe-search.model';
import { ClearRecipeResults } from '../actions/clear-recipes';

export interface RecipesStateModel {
  recipeList: ModelRecipeResult[];
  lastSearchQuery: RecipeSearchQuery;
}

@State<RecipesStateModel>({
  name: 'recipes',
  defaults: {
    recipeList: null,
    lastSearchQuery: null,
  },
})
@Injectable()
export class RecipesState {
  @Selector() static full(state: RecipesStateModel): RecipesStateModel {
    return state;
  }

  @Selector() static recipeList(state: RecipesStateModel): ModelRecipeResult[] {
    return state.recipeList;
  }

  @Selector() static lastSearchQuery(
    state: RecipesStateModel
  ): RecipeSearchQuery {
    return state.lastSearchQuery;
  }

  @Action(SetRecipeList) setFavRecipe(
    ctx: StateContext<RecipesStateModel>,
    action: SetRecipeList
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      recipeList: action.recipeList,
      lastSearchQuery: action.lastSearchQuery,
    });
  }

  @Action(ClearRecipeResults) clearRecipeResults(
    ctx: StateContext<RecipesStateModel>
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      recipeList: null,
    });
  }
}
