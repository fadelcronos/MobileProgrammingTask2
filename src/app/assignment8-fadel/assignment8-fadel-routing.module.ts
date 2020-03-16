import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assignment8FadelPage } from './assignment8-fadel.page';

const routes: Routes = [
  {
    path: '',
    component: Assignment8FadelPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assignment8FadelPageRoutingModule {}
