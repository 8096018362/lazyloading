import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/course', pathMatch: 'full' },
    { path: 'course', loadChildren: './user/course/course.module#CourseModule' },
    { path: 'cats', loadChildren: './user/course-details/cats/cats.module#CatsModule' },
    { path: 'empty', loadChildren: './user/course-details/empty/empty.module#EmptyModule' },
    { path: 'transport', loadChildren: './user/course-details/transport/transport.module#TransportModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
