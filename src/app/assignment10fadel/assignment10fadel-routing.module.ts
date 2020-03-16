import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assignment10fadelPage } from './assignment10fadel.page';

const routes: Routes = [
  {
    path: '',
    component: Assignment10fadelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assignment10fadelPageRoutingModule {}
