import { Component, OnInit } from '@angular/core';
import { RecipeCategory } from '../../models/recipe-category';
import { RecipeCategoryService } from '../../service/recipe-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe-category',
  templateUrl: './create-recipe-category.component.html',
  styleUrls: ['./create-recipe-category.component.scss']
})
export class CreateRecipeCategoryComponent implements OnInit {

  model: RecipeCategory = new RecipeCategory();
  recipeCategoryId: any;
  constructor(private _recipeCategoryService: RecipeCategoryService, private _router: Router, private _activeteRoute: ActivatedRoute) { }
  ngOnInit(): void {
    if (this._activeteRoute.snapshot.params['id'] !== null && this._activeteRoute.snapshot.params['id'] !== undefined) {
      this.recipeCategoryId = this._activeteRoute.snapshot.params['id'];
      this._recipeCategoryService.GetAllRecipeCategoryId(this.recipeCategoryId).subscribe({
        next: (x: any) => {
          this.model = x;
        },
        error: () => {

        }
      })
    }
  }

  SaveRecipeCatDetails() {
    debugger;
    if (this.recipeCategoryId !== null && this.recipeCategoryId !== undefined) {
      this._recipeCategoryService.UpdateRecipeCategory(this.recipeCategoryId, this.model).subscribe({
        next: (x: any) => {
          this.model = x;
          this._router.navigate(['recipe-category'])
        },
        error: () => {

        }
      })
    }
    else {
      this._recipeCategoryService.CreateRecipeCategory(this.model).subscribe({
        next: () => {
          this._router.navigate(['recipe-category'])
        },
        error: () => {

        }
      })
    }
  }
}
