import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ExplorerComponent } from './explorer.component';
import { FarmerComponent } from './farmer/farmer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: 'explorer',
        component: ExplorerComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'farmer/:id',
                component: FarmerComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
        ]
    }
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorerRoutingModule { }
