import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { addToFavoritesActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { AddToFavoritesService } from '../services/addToFavorites.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const getFeedEffect = createEffect(
  (
    actions$ = inject(Actions),
    addToFavoritesService = inject(AddToFavoritesService)
  ) => {
    return actions$.pipe(
      ofType(addToFavoritesActions.addToFavorites),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? addToFavoritesService.removeFromFavorites(slug)
          : addToFavoritesService.addToFavorites(slug);
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesActions.addToFavoritesSuccess({ article });
          }),
          catchError(() => {
            return of(addToFavoritesActions.addToFavoritesFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
