import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../service/recipe.service';
import { RecipeCategoryService } from '../../recipe-category/service/recipe-category.service';
import { RecipeCategory } from '../../recipe-category/models/recipe-category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  model: Recipe = new Recipe();
  recipeCategories: RecipeCategory[] = [];
  recipeId: any;

  constructor(private _recipeService: RecipeService,
    private _recipeCategoryService: RecipeCategoryService,
    private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this._activateRoute.snapshot.params['id'] !== null && this._activateRoute.snapshot.params['id'] !== undefined) {
      this.recipeId = this._activateRoute.snapshot.params['id'];
      this._recipeService.GetAllRecipeId(this.recipeId).subscribe({
        next: (x: any) => {
          this.model = x;
        },
        error: () => {

        }
      })
    }
    this.GetRecipeCategoryDetails();
  }

  SaveRecipeDetails() {
    if (this.recipeId !== null && this.recipeId !== undefined) {
      this._recipeService.UpdateRecipe(this.recipeId, this.model).subscribe({
        next: (x: any) => {
          this.model = x;
        }
      })
    } else {
      this._recipeService.CreateRecipe(this.model).subscribe({
        next: () => {

        },
        error: () => {

        }
      })
    }

  }

  GetRecipeCategoryDetails() {
    this._recipeCategoryService.GetAllRecipeCategory().subscribe({
      next: (x: any) => {
        this.recipeCategories = x;
      },
      error: () => {
      }
    })
  }
}
