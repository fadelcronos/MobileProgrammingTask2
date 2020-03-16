import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Assignment10fadelPageRoutingModule } from './assignment10fadel-routing.module';

import { Assignment10fadelPage } from './assignment10fadel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Assignment10fadelPageRoutingModule
  ],
  declarations: [Assignment10fadelPage]
})
export class Assignment10fadelPageModule {}
