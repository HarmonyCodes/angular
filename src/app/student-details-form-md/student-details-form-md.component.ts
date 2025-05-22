import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student, year } from '../student.model';
import { Subject } from '../models/subject.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details-form-md',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-details-form-md.component.html',
  standalone: true,
  styleUrl: './student-details-form-md.component.scss'
})
export class StudentDetailsFormMDComponent {

  subjects: Subject[] = [
    new Subject(1, "Math", "Algebra and Geometry", 3, true),
    new Subject(2, "English", "Grammar and Literature", 3, true),
    new Subject(3, "History", "World History", 3, true),
    new Subject(4, "Science", "Physics and Chemistry", 3, true)
  ]
  Year = year;
  successMessage: string = '';

  StudentForm!: FormGroup;
  private _student!: Student;
  public get student(): Student {
    return this._student;
  }
  @Input()
  public set student(value: Student) {
    this._student = value;
    this.StudentForm = new FormGroup({
      "firstName": new FormControl(this._student.firstName, Validators.required),
      "lastName": new FormControl(this._student.lastName, Validators.required),
      "address": new FormControl(this._student.address, Validators.required),
      "phone": new FormControl(this._student.phone, [Validators.required, Validators.minLength(10)]),
      "gradeAverage": new FormControl(this._student.gradeAverage, Validators.required),
      "active": new FormControl(this._student.active, Validators.required),
      "leavingDate": new FormControl(this._student.leavingDate),
      "subject": new FormControl(this._student.subjects, Validators.required),
      "year": new FormControl(this._student.year, Validators.required)
    })
  }
  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  saveNewStudent() {
    this.student.firstName = this.StudentForm.controls["firstName"].value;
    this.student.lastName = this.StudentForm.controls["lastName"].value;
    this.student.address = this.StudentForm.controls["address"].value;
    this.student.phone = this.StudentForm.controls["phone"].value;
    this.student.gradeAverage = this.StudentForm.controls["gradeAverage"].value;
    this.student.active = this.StudentForm.controls["active"].value;
    this.student.leavingDate = this.StudentForm.controls["leavingDate"].value;
    //this.student=this.StudentForm.value;
    this.onSaveNewStudent.emit(this.student);
    this.successMessage = `Student ${this._student.firstName} ${this._student.lastName} saved successfully!`;

  }

  constructor() { }

  ngOnInit(): void { }
}
