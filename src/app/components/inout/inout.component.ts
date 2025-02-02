import { Component } from '@angular/core';
import { COURSES } from '../../../db-data';
import { Course } from '../../model/course';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrl: './inout.component.css'
})
export class InoutComponent {

  courses = COURSES;
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngCourse = COURSES[2];


  onCourseSelected(course: Course) {
    alert("Parent --" + JSON.stringify(course));
  }

}
