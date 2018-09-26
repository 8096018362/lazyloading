import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../shared/shared.module';
import { CourseComponent } from './course.component';
import { Courserouting } from './course.routing'

import { CourseService } from '../service/course-service';

@NgModule({
    imports: [
        
        CommonModule,
        Courserouting,
        SharedModule
    ],
    declarations: [
        CourseComponent
    ],
    providers: [
        CourseService
    ]
})
export class CourseModule {

}
