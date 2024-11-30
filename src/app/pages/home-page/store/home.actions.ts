import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const HomeActions = createActionGroup({
  source: 'Home page',
  events: {
    loadCatalogs: emptyProps,
    loadCatalogsSuccess: props<{ catalogs: any }>(),
  }
});
