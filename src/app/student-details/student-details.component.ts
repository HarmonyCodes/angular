import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
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

export class StudentDetailsComponent implements OnInit {

  @Input()
  student!: Student;//=this.students[0];

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  saveNewStudent(){
    this.onSaveNewStudent.emit(this.student);
  }

  constructor() {}
  
  ngOnInit(): void {}
}