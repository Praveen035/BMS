import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/helpers/http.service';
import { RecipeCategory } from '../models/recipe-category';

@Injectable({
  providedIn: 'root'
})
export class RecipeCategoryService {

  constructor(private httpClient: HttpService) { }

  CreateRecipeCategory(recipeCategory: RecipeCategory) {
    debugger;
    return this.httpClient.post<RecipeCategory>(recipeCategory, 'api/recipecategory/addrecipecategory');
  }

  GetAllRecipeCategory() {
    return this.httpClient.get<RecipeCategory>('api/recipecategory/getrecipecategory');
  }

  DeleteRecipeCategory(id: any) { return this.httpClient.delete(id, 'api/recipecategory'); }

  GetAllRecipeCategoryId(id: any) {
    const url = id ? `api/recipecategory/${id}` : `api/recipecategory`;
    return this.httpClient.get<RecipeCategory>(url);
  }

  UpdateRecipeCategory(id: any, recipeCategory: RecipeCategory) {
    return this.httpClient.put<RecipeCategory>(id, recipeCategory, 'api/recipecategory');
  }
}
