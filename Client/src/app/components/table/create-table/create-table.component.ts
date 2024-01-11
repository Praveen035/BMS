import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {

  model: Table = new Table();
  ngOnInit(): void {
  }

  SaveTableDetails() { }
}
