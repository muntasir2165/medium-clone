import { Route } from '@angular/router';
import { EditArticleComponent } from './components/editArticle/editArticle.component';
import * as editArticleEffects from './store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { editArticleFeatureKey, editArticleReducer } from './store/reducers';
import { EditArticleService } from './services/editArticle.service';

export const routes: Route[] = [
  {
    path: '',
    component: EditArticleComponent,
    providers: [
      EditArticleService,
      provideEffects(editArticleEffects),
      provideState(editArticleFeatureKey, editArticleReducer),
    ],
  },
];
