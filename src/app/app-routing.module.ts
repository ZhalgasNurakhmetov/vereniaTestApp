import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutes} from './app.routes';

const routes: Routes = [
  {
    path: AppRoutes.home,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: AppRoutes.favorites,
    loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoriteModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.home,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
