import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeSearchQuery } from 'src/app/core/api/models/recipe-search.model';
import { RecipeDatabaseService } from 'src/app/core/api/services/recipe-database.service';

@Component({
  selector: 'recipe-filter',
  template: `
    <section>
      <form
        [formGroup]="searchForm"
        fxLayout="row"
        fxLayout.lt-sm="column"
        fxLayoutGap="10px grid"
        (submit)="filterResults()"
      >
        <mat-form-field fxFlex>
          <input
            matInput
            type="text"
            formControlName="ingredients"
            placeholder="Ingredients"
            autocomplete="off"
          />
          <mat-hint>Comma seperate your values!</mat-hint>
        </mat-form-field>
        <mat-form-field fxFlex>
          <input
            matInput
            type="text"
            formControlName="search"
            placeholder="Search"
            autocomplete="off"
          />
        </mat-form-field>
        <div fxLayoutAlign="end">
          <button
            mat-flat-button
            [disabled]="searchForm.pristine"
            color="primary"
            style="margin: 10px 0px;"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  `,
  styles: [
    `
      section {
        margin: 10px 0px;
      }
    `,
  ],
})
export class RecipeFilterComponent implements OnInit {
  searchForm: FormGroup = this._fb.group({
    ingredients: null,
    search: null,
  });

  constructor(
    private _recipeDatabaseService: RecipeDatabaseService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      const searchQuery = new RecipeSearchQuery(
        params.ingredients != null ? `&i=${params.ingredients}` : ``,
        params.search != null ? `&q=${params.search}` : ``
      );
      this.searchForm.patchValue({
        ingredients: params.ingredients,
        search: params.search,
      });
      this._recipeDatabaseService.getRecipes(searchQuery);
    });
  }

  filterResults() {
    Object.keys(this.searchForm.value).forEach(
      (i) =>
        (this.searchForm.value[i] =
          this.searchForm.value[i] === '' ? null : this.searchForm.value[i])
    );
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: this.searchForm.value,
    });
  }
}
