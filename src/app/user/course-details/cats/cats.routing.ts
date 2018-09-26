import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CatsComponent } from './cats.component';



export const routes: Routes = [
    {
        path: '',
        component: CatsComponent
    },
];


export const CatsRouting: ModuleWithProviders = RouterModule.forChild(routes);



