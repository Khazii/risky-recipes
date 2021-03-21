import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';
import { RemoveFavRecipe } from '../actions/remove-fav';
import { SetFavRecipe } from '../actions/set-fav';
import { SetRecentRecipe } from '../actions/set-recent';

export interface UserStateModel {
  favRecipes: ModelRecipeResult[];
  recentRecipes: ModelRecipeResult[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    favRecipes: null,
    recentRecipes: null,
  },
})
@Injectable()
export class UserState {
  constructor(private _snackBar: MatSnackBar) {}
  @Selector() static full(state: UserStateModel): UserStateModel {
    return state;
  }

  @Selector() static favRecipes(state: UserStateModel): ModelRecipeResult[] {
    return state.favRecipes;
  }

  @Selector() static recentRecipes(state: UserStateModel): ModelRecipeResult[] {
    return state.recentRecipes;
  }

  @Action(SetFavRecipe) setFavRecipe(
    ctx: StateContext<UserStateModel>,
    action: SetFavRecipe
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      favRecipes:
        state.favRecipes != null
          ? state.favRecipes.concat(action.recipe)
          : [action.recipe],
    });

    this._snackBar.open(`Added Favourite ${action.recipe.title}`, `Okay`, {
      duration: 3000,
    });
  }

  @Action(RemoveFavRecipe) removeFavRecipe(
    ctx: StateContext<UserStateModel>,
    action: RemoveFavRecipe
  ) {
    const state = ctx.getState();
    const newArray = state.favRecipes.filter(
      (x) => x.href !== action.recipe.href
    );

    ctx.setState({
      ...state,
      favRecipes: newArray,
    });

    this._snackBar.open(`Removed Favourite ${action.recipe.title}`, `Okay`, {
      duration: 3000,
    });
  }

  @Action(SetRecentRecipe) setRecentRecipe(
    ctx: StateContext<UserStateModel>,
    action: SetRecentRecipe
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      recentRecipes:
        state.recentRecipes != null
          ? state.recentRecipes.concat(action.recipe)
          : [action.recipe],
    });
  }
}
