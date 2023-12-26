import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout.component';

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

      },
      {
        path: 'employee',
        loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'department',
        loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule),
      },
      {
        path: 'recipe',
        loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipeModule),
      },
      {
        path: 'recipe-category',
        loadChildren: () => import('../recipe-category/recipe-category.module').then(m => m.RecipeCategoryModule),
      },
      {
        path: 'table',
        loadChildren: () => import('../table/table.module').then(m => m.TableModule),
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuModule),
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(LayoutRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
