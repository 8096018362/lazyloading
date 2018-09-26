import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { EmptyRouting } from './empty.routing'
import { SharedModule } from '../../../shared/shared.module';
import { CourseService } from '../../service/course-service';

@NgModule({
    imports: [
        CommonModule,
        EmptyRouting,
        SharedModule
    ],
    declarations: [
        EmptyComponent
    ],
    providers: [
        CourseService
    ]
})
export class EmptyModule { }
