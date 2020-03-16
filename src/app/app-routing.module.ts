import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'assignment8-fadel',
    loadChildren: () => import('./assignment8-fadel/assignment8-fadel.module').then( m => m.Assignment8FadelPageModule)
  },
  {
    path: 'assignment8-fadel/details/:id',
    loadChildren: () => import('./assignment8-fadel/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'assignment9fadel',
    loadChildren: () => import('./assignment9fadel/assignment9fadel.module').then( m => m.Assignment9fadelPageModule)
  },
  {
    path: 'assignment10fadel',
    loadChildren: () => import('./assignment10fadel/assignment10fadel.module').then( m => m.Assignment10fadelPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
