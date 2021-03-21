export interface ModelRecipeList {
  title: string;
  version: number;
  href: string;
  results: ModelRecipeResult[];
}

export class ModelRecipeResult {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}
