import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Assignment8FadelPageRoutingModule } from './assignment8-fadel-routing.module';

import { Assignment8FadelPage } from './assignment8-fadel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Assignment8FadelPageRoutingModule
  ],
  declarations: [Assignment8FadelPage]
})
export class Assignment8FadelPageModule {}
