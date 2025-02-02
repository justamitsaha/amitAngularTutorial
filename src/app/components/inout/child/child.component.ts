import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input({
    required: true
  })
  course!: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    alert("Course Value emitted from child " + JSON.stringify(this.course));
    this.courseSelected.emit(this.course);

  }

}
