import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/helpers/http.service';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpService) { }

  CreateTable(recipe: Table) {
    return this.httpClient.post<Table>(recipe, 'api/table/addtable');
  }

  GetAllTable() {
    return this.httpClient.get<Table>('api/table/gettable');
  }

  DeleteTable(id: any) { return this.httpClient.delete(id, 'api/table'); }

  GetAllTableId(id: any) {
    const url = id ? `api/table/${id}` : `api/table`;
    return this.httpClient.get<Table>(url);
  }

  UpdateTable(id: any, recipe: Table) {
    return this.httpClient.put<Table>(id, recipe, 'api/table');
  }
}
