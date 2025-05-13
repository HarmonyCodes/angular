import { Component, Input } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss',
  standalone: true
})

export class StudentDetailsComponent {

  @Input()
  student!: Student;//=this.students[0];
  constructor() {}
}