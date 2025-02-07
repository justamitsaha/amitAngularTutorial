import { Component } from '@angular/core';
import { COURSES } from '../../../db-data';
import { Course } from '../../model/course';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrl: './inout.component.css'
})
export class InoutComponent {

  angular = COURSES;
  rxjs = COURSES[0];
  ngrx = COURSES[1];

  emittedValue: Course | undefined;


  onCourseSelected(course: Course) {
    this.emittedValue = course;
  }

}
