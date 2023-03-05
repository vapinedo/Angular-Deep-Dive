import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitted = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('CourseCardComponent - button clicked');
    this.courseEmitted.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
}
