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
  page = 1;
  pageSize = 5;
  collectionSize = this.models.length;
  recipeCategoryId: any;
  searchText: any;
  constructor(private _recipeCategoryService: RecipeCategoryService) {

  }
  ngOnInit(): void {
    this.GetRecipeCategoryDetails();
  }

  GetRecipeCategoryDetails() {
    this._recipeCategoryService.GetAllRecipeCategory().subscribe({
      next: (x: any) => {
        this.models = x;
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
