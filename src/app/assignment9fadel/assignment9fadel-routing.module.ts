import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assignment9fadelPage } from './assignment9fadel.page';

const routes: Routes = [
  {
    path: '',
    component: Assignment9fadelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assignment9fadelPageRoutingModule {}
