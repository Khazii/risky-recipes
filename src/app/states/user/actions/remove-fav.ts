import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';

export class RemoveFavRecipe {
  static readonly type = '[USER] RemoveFav';
  constructor(public recipe: ModelRecipeResult) {}
}
export class ClearFavRecipes {
  static readonly type = '[USER] ClearFavs';
}
