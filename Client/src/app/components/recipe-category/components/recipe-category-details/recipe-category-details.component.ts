import { Component, OnInit } from '@angular/core';
import { RecipeCategory } from '../../models/recipe-category';

@Component({
  selector: 'app-recipe-category-details',
  templateUrl: './recipe-category-details.component.html',
  styleUrls: ['./recipe-category-details.component.scss']
})
export class RecipeCategoryDetailsComponent implements OnInit {

  models: RecipeCategory[] = [];
  ngOnInit(): void {
  }

  DeleteRecipeCategory(recipeCatId: any) {
  }
}
