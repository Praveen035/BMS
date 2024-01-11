import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/helpers/http.service';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpService) { }

  CreateRecipe(recipe: Recipe) {
    debugger;
    return this.httpClient.post<Recipe>(recipe, 'api/recipe/addrecipe');
  }

  GetAllRecipe() {
    return this.httpClient.get<Recipe>('api/recipe/getrecipe');
  }

  DeleteRecipe(id: any) { return this.httpClient.delete(id, 'api/recipe'); }

  GetAllRecipeId(id: any) {
    const url = id ? `api/recipe/${id}` : `api/recipe`;
    return this.httpClient.get<Recipe>(url);
  }

  UpdateRecipe(id: any, recipe: Recipe) {
    return this.httpClient.put<Recipe>(id, recipe, 'api/recipe');
  }
}
