import { Routes } from '@angular/router'
import { provideState } from '@ngrx/store'
import * as fromHome from '../app/pages/home-page/store'
import { provideEffects } from '@ngrx/effects'
import { HomeEffects } from './pages/home-page/store'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component').then((c) => c.HomePageComponent),
    providers: [
      provideState(fromHome.homeFeature),
      provideEffects(HomeEffects)
    ],
  },
]
