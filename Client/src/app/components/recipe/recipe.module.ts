import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/common/directives/directive/directive.module';

@NgModule({
  declarations: [
    CreateRecipeComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    DirectiveModule
  ]
})
export class RecipeModule { }
