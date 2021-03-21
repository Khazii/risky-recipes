import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section fxLayout="row">
      <div fxLayoutAlign="center" fxFlex>
        <span>
          👆 This is a project 🚀 made by
          <a href="https://twitter.com/olliebrennan_" target="_blank">
            Oliver Brennan
          </a>
          👋 using
          <a href="http://www.recipepuppy.com/about/api/" target="_blank">
            Recipe Puppy</a
          >'s 🐶 open api 🌐
        </span>
      </div>
    </section>
    <section fxLayout="row">
      <img src="../../../assets/images/figgy_field.jpg" />
    </section>
  `,
  styleUrls: [`./about.component.scss`],
})
export class AboutComponent {}
