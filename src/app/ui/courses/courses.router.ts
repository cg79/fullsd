import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';

const Courses_ROUTER: Routes = [
  // { path: 'load-me', component: CreateUserComponent },
  {
    path: '',
    component: CoursesComponent
  }
];

export const coursesRouter = RouterModule.forChild(Courses_ROUTER );

