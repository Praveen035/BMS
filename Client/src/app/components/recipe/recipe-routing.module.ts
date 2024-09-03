import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

const routes: Routes = [{
  path: '',
  component: RecipeDetailsComponent
},
{
  path: 'create-recipe',
  component: CreateRecipeComponent
}, {
  path: 'edit/:id',
  component: CreateRecipeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
