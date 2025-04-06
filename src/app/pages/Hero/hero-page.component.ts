import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';



@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
  //styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent {
  // Using signal to manage state
  // This is a simple example of using signal to manage state in Angular
   name = signal('Superman');
   age = signal(30);


  getHeroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  heroNameUpprCase = computed(() => this.name().toUpperCase());
  // This is a simple example of using signal to manage state in Angular
  // This is a simple example of using signal to manage state in Angular


  changeHeroName() {
    this.name.set('Spiderman');
  }

  changeHeroAge() {
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Superman');
    this.age.set(30);
  }

}
