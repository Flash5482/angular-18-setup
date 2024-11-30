import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { map, mergeMap } from 'rxjs'

import { HomeService } from '../services/home.service'

import { HomeActions } from './home.actions'

@Injectable()
export class HomeEffects {

  constructor(
    private homeService: HomeService,
    private actions$: Actions,
    private store: Store) {}

  loadPortfolios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.loadCatalogs),
      mergeMap((catalogs) => {
        return this.homeService.getPortfolios().pipe(
          map(() => {
              return HomeActions.loadCatalogsSuccess({ catalogs })
            }
          )
        );
      })
    );
  });
}
