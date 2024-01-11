import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCategoryRoutingModule } from './recipe-category-routing.module';
import { CreateRecipeCategoryComponent } from './components/create-recipe-category/create-recipe-category.component';
import { RecipeCategoryDetailsComponent } from './components/recipe-category-details/recipe-category-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateRecipeCategoryComponent,
    RecipeCategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeCategoryRoutingModule,
    FormsModule
  ]
})
export class RecipeCategoryModule { }
