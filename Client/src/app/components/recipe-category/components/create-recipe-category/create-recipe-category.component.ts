import { Component, OnInit } from '@angular/core';
import { RecipeCategory } from '../../models/recipe-category';

@Component({
  selector: 'app-create-recipe-category',
  templateUrl: './create-recipe-category.component.html',
  styleUrls: ['./create-recipe-category.component.scss']
})
export class CreateRecipeCategoryComponent implements OnInit {

  model: RecipeCategory = new RecipeCategory();
  ngOnInit(): void {
  }

  SaveRecipeCatDetails() { }


}
