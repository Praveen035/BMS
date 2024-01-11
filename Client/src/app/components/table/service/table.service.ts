import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/helpers/http.service';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpService) { }

  CreateRecipe(recipe: Table) {
    return this.httpClient.post<Table>(recipe, 'api/table/addtable');
  }

  GetAllRecipe() {
    return this.httpClient.get<Table>('api/table/getrecipe');
  }

  DeleteRecipe(id: any) { return this.httpClient.delete(id, 'api/recipe'); }

  GetAllRecipeId(id: any) {
    const url = id ? `api/recipe/${id}` : `api/recipe`;
    return this.httpClient.get<Table>(url);
  }

  UpdateRecipe(id: any, recipe: Table) {
    return this.httpClient.put<Table>(id, recipe, 'api/recipe');
  }
}
