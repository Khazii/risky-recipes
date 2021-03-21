import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';

export class SetRecentRecipe {
  static readonly type = '[USER] SetRecentRecipe';
  constructor(public recipe: ModelRecipeResult) {}
}
