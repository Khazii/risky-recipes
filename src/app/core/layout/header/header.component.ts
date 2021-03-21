import { Component } from '@angular/core';
import { name, version } from '../../../../../package.json';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar>
      <section fxFlex fxLayout="row">
        <div fxLayoutAlign="start" fxFlex fxHide.lt-sm></div>
        <div fxLayoutAlign="center" fxLayoutAlign.lt-sm="start" fxFlex>
          <span [routerLink]="'home'" class="header-title">
            {{ headerTitle | replace: '-':' ' | titlecase }}
          </span>
        </div>
        <div fxLayoutAlign="end" fxFlex>
          <button
            *ngFor="let route of routes"
            [routerLink]="route.url"
            routerLinkActive="active"
            mat-button
          >
            <span>{{ route.title }}</span>
          </button>
        </div>
        <div class="underbar"></div>
      </section>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerTitle = name;
  projectVersion = version;
  routes = [
    { title: 'Home', url: 'home' },
    { title: 'Recipe Search', url: 'recipes' },
    { title: 'About', url: 'about' },
  ];
}
