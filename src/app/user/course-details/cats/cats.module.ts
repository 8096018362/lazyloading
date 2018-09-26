

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { CatsComponent } from './cats.component';
import { CatsRouting } from './cats.routing'
import { SharedModule } from '../../../shared/shared.module';

import { CourseService } from '../../service/course-service';


@NgModule({
    imports: [
        CommonModule,
        CatsRouting,
        SharedModule
    ],
    declarations: [
        CatsComponent
    ],
    providers: [
        CourseService
    ]
})
export class CatsModule {

}
