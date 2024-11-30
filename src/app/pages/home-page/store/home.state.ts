import { createFeature, createReducer, on } from '@ngrx/store'

import { HomeActions } from './home.actions'

export interface HomeSate {
  catalogs: null
}

export const initialState: HomeSate = {
  catalogs: null
}

export const homeReducer = createReducer(
  initialState,
  on(
    HomeActions.loadCatalogsSuccess,
    (state: HomeSate, { catalogs }): HomeSate => ({
      ...state,
      catalogs: catalogs
    })
  )
)

export const homeFeature = createFeature({
  name: 'homeFeature',
  reducer: homeReducer
})
