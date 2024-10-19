import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCategoryRoutingModule } from './recipe-category-routing.module';
import { CreateRecipeCategoryComponent } from './components/create-recipe-category/create-recipe-category.component';
import { RecipeCategoryDetailsComponent } from './components/recipe-category-details/recipe-category-details.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/common/directives/directive/directive.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'src/app/common/pipes/pipes/pipes.module';


@NgModule({
  declarations: [
    CreateRecipeCategoryComponent,
    RecipeCategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeCategoryRoutingModule,
    FormsModule,
    DirectiveModule,
    NgbModule,
    PipesModule
  ]
})
export class RecipeCategoryModule { }
