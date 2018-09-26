import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EmptyComponent } from './empty.component';



export const routes: Routes = [
    {
        path: '',
        component: EmptyComponent
    },
];


export const EmptyRouting: ModuleWithProviders = RouterModule.forChild(routes);



