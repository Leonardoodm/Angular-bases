import { Routes } from '@angular/router';
import { CounterPageComponent, DragonballComponent, HeroPageComponent } from './pages';
import { DragonballSuperComponent } from './pages/dragonball-super/dragonball-super-page.component';


export const routes: Routes = [
  { path: '', component: CounterPageComponent },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
