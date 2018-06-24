import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { coursesRouter } from './courses.router';
import {SharedModule } from '../footer/shared-module';
import {CoursesComponent} from './courses.component';
import {EscapeHtmlPipe} from '../../pipes/keep-html.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, coursesRouter],
  declarations: [
    CoursesComponent
  ],
})
export class CoursesModule {

}
