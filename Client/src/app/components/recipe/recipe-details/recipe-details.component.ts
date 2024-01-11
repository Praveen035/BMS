import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  models: Recipe[] = [];
  constructor(private _recipeService: RecipeService) {

  }
  ngOnInit(): void {
    this.GetAllRecipe();
  }


  GetAllRecipe() {
    this._recipeService.GetAllRecipe().subscribe({
      next: (x: any) => {
        this.models = x;
      },
      error: () => {

      }
    })
  }

  DeleteRecipe(recipeId: any) {
    this._recipeService.DeleteRecipe(recipeId).subscribe({
      next: () => {
        this.GetAllRecipe();
      }
    })
  }

}


