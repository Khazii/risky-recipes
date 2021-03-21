import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section fxLayout="column">
      <app-header></app-header>
      <div fxFlex class="main-wrapper">
        <div class="main-container" fxLayout="column" fxLayoutAlign="center">
          <router-outlet></router-outlet>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      section {
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  title = 'pet-recipe-app';
}
