import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Kids } from './pages/kids/kids';
import { Discounts } from './pages/discounts/discounts';
import { Men } from './pages/men/men';
import { Women } from './pages/women/women';
import { AboutUs } from './pages/about-us/about-us';
import { Detalles } from './pages/detalles/detalles';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    component: Home,
    path: 'home',
  },
  {
    component: Contact,
    path: 'contact',
  },
  {
    component: Kids,
    path: 'kids',
  },
  {
    component: Discounts,
    path: 'discounts',
  },
  { component: AboutUs, path: 'about-us' },
  {
    component: Men,
    path: 'men',
  },
  {
    component: Detalles,
    path: 'detalles/:id',
  },
  {
    component: Women,
    path: 'women',
  },
  {
    redirectTo: 'home',
    path: '',
    pathMatch: 'full',
  },
  {
    redirectTo: 'home',
    path: '**',
    pathMatch: 'full',
  },
];
