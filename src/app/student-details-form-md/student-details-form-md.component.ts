import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details-form-md',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student-details-form-md.component.html',
  styleUrl: './student-details-form-md.component.scss'
})
export class StudentDetailsFormMDComponent {
  StudentForm!: FormGroup;
  private _student!: Student;
  public get student(): Student {
    return this._student;
  }
  @Input()
  public set students(value: Student) {
    this._student = value;
    this.StudentForm= new FormGroup({
      "firstName": new FormControl(this._student.firstName, Validators.required), 
      "lastName": new FormControl(this._student.lastName, Validators.required),
      "address": new FormControl(this._student.address, Validators.required),
      "phone": new FormControl(this._student.phone, [Validators.required, Validators.minLength(10)]),
      "gradeAverage": new FormControl(this._student.gradeAverage, Validators.required),
      "active": new FormControl(this._student.active, Validators.required),
      "leavingDate": new FormControl(this._student.leavingDate)
    })}
  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();
  
  saveNewStudent(){
    this.onSaveNewStudent.emit(this.student);
  }

  constructor() {}
  
  ngOnInit(): void {}
}
