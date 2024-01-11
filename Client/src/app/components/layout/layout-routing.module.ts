import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout.component';
import { AuthGuard } from 'src/app/common/guards/auth.guard';

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'employee',
        loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'customer',
        loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'department',
        loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'recipe',
        loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipeModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'recipe-category',
        loadChildren: () => import('../recipe-category/recipe-category.module').then(m => m.RecipeCategoryModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'table',
        loadChildren: () => import('../table/table.module').then(m => m.TableModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderModule),
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'reservation',
        loadChildren: () => import('../reservation/reservation.module').then(m => m.ReservationModule),
        canActivate: [
          AuthGuard
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(LayoutRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
