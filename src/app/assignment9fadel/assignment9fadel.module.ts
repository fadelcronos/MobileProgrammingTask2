import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Assignment9fadelPageRoutingModule } from './assignment9fadel-routing.module';

import { Assignment9fadelPage } from './assignment9fadel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Assignment9fadelPageRoutingModule
  ],
  declarations: [Assignment9fadelPage]
})
export class Assignment9fadelPageModule {}
