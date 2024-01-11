import { Component, OnInit } from '@angular/core';
import { RecipeCategory } from '../../models/recipe-category';
import { RecipeCategoryService } from '../../service/recipe-category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-category-details',
  templateUrl: './recipe-category-details.component.html',
  styleUrls: ['./recipe-category-details.component.scss']
})
export class RecipeCategoryDetailsComponent implements OnInit {

  models: RecipeCategory[] = [];
  recipeCategoryId: any;
  constructor(private _recipeCategoryService: RecipeCategoryService) {

  }
  ngOnInit(): void {
    this.GetRecipeCategoryDetails();
  }

  GetRecipeCategoryDetails() {
    debugger;
    this._recipeCategoryService.GetAllRecipeCategory().subscribe({
      next: (x: any) => {
        this.models = x;
        debugger;
      },
      error: () => {

      }
    })
  }

  DeleteRecipeCategory(recipeCatId: any) {
    this._recipeCategoryService.DeleteRecipeCategory(recipeCatId).subscribe({
      next: () => {
        this.GetRecipeCategoryDetails();
      },
      error: () => {

      }
    })
  }

}
