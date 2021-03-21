import { RecipeSearchQuery } from 'src/app/core/api/models/recipe-search.model';
import { ModelRecipeResult } from 'src/app/core/api/models/recipe.model';

export class SetRecipeList {
  static readonly type = '[RECIPE] SetRecipeList';
  constructor(
    public recipeList: ModelRecipeResult[],
    public lastSearchQuery: RecipeSearchQuery
  ) {}
}
