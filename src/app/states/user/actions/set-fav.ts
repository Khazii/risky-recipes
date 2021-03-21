import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';

export class SetFavRecipe {
  static readonly type = '[USER] SetFavRecipe';
  constructor(public recipe: ModelRecipeResult) {}
}
