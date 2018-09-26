import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CourseComponent } from './course.component';



export const routes: Routes = [
    {
        path: '',
        component: CourseComponent
    },
];


export const Courserouting: ModuleWithProviders = RouterModule.forChild(routes);



