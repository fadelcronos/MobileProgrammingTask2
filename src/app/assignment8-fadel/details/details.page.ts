import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from '../assignment8-fadel.recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  Recipe = Recipe;
  recipeId: string;
  imageUrl: string;
  title: string;
  ingredients = [];

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.recipeId = params.get("id");
    });
    this.getRecipe(this.recipeId)
  }

  getRecipe(recipeId: string) {
    let recipeResult = this.Recipe.find(Recipe => Recipe.id === recipeId);
    this.imageUrl = recipeResult.imageUrl;
    this.title = recipeResult.title;
    this.ingredients = recipeResult.ingredients;
  }
}
