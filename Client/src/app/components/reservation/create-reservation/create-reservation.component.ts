import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../models/reservation';
import { TableService } from '../../table/service/table.service';
import { RecipeService } from '../../recipe/service/recipe.service';
import { Recipe } from '../../recipe/models/recipe';
import { Table } from '../../table/models/table';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    meridians: ['AM(Midnight to Noon)', 'PM(Noon to Midnight)']
  });
}

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss'],
  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
})
export class CreateReservationComponent implements OnInit {

  model: Reservation = new Reservation();
  recipes: Recipe[] = [];
  tables: Table[] = [];
  resId: any;
  selectedTables: any;
  selectedRecipes: any;

  myDateValue: Date;
  // mytime: Date = new Date();
  ismeridian: boolean = true;
  timePickerConfig: TimepickerConfig = new TimepickerConfig();
  meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];
  mytime: any;

  constructor(
    private _resTableService: ReservationService,
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _tableService: TableService,
    private _recipeService: RecipeService) { }
  ngOnInit(): void {
    if (this._activateRoute.snapshot.params['id'] !== null && this._activateRoute.snapshot.params['id'] !== undefined) {
      this.resId = this._activateRoute.snapshot.params['id'];
      this._resTableService.GetAllReservationId(this.resId).subscribe({
        next: (x: any) => {
          this.model = x;
        },
        error: () => {

        }
      })
    }
    this.GetAllTableDetails();
    this.GetAllRecipeDetails();
  }

  SaveResTableDetails() {
    if (this.resId !== null && this.resId !== undefined) {
      this._resTableService.UpdateReservation(this.resId, this.model).subscribe({
        next: (x: any) => {
          this.model = x;
          this._router.navigate(['reservation']);
        }
      })
    } else {
      this._resTableService.CreateReservation(this.model).subscribe({
        next: () => {
          this._router.navigate(['reservation']);
        },
        error: () => {
        }
      })
    }
  }

  GetAllTableDetails() {
    this._tableService.GetAllTable().subscribe({
      next: (x: any) => {
        this.tables = x;
        debugger;
      },
      error: () => {

      }
    })
  }

  GetAllRecipeDetails() {
    this._recipeService.GetAllRecipe().subscribe({
      next: (x: any) => {
        this.recipes = x;
        debugger;
      },
      error: () => {

      }
    })
  }
}
