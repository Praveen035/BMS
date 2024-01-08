import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCategoryDetailsComponent } from './components/recipe-category-details/recipe-category-details.component';
import { CreateRecipeCategoryComponent } from './components/create-recipe-category/create-recipe-category.component';

const routes: Routes = [{
  path: '',
  component: RecipeCategoryDetailsComponent
},
{
  path: 'create-recipe-category',
  component: CreateRecipeCategoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeCategoryRoutingModule { }
