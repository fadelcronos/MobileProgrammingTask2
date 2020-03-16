import { Component, OnInit } from '@angular/core';
import { Recipe } from './assignment8-fadel.recipe'

@Component({
  selector: 'app-assignment8-fadel',
  templateUrl: './assignment8-fadel.page.html',
  styleUrls: ['./assignment8-fadel.page.scss'],
})
export class Assignment8FadelPage{
  Recipe = Recipe;

  constructor() { }

  getAllRecipe() {
    console.log(...this.Recipe);
    return [...this.Recipe];
  }


}
