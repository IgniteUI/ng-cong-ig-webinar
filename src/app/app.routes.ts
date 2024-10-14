import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ToyCollectionComponent } from './toy-collection/toy-collection.component';
import { ToyDetailsComponent } from './toy-details/toy-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'toy-collection', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'toy-collection',
    component: ToyCollectionComponent,
    data: {
      text: 'Toy collection'
    }
  },
  {
    path: 'toy-details',
    component: ToyDetailsComponent,
    data: {
      text: 'Toy Details'
    }
  },
  {
    path: 'toy-details/:toyID',
    component: ToyDetailsComponent,
    data: {
      text: 'Toy Details'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
