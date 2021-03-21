export class RecipeSearchQuery {
  ingredients: string;
  search: string;

  constructor(i: string, s: string) {
    this.ingredients = i;
    this.search = s;
  }
}
