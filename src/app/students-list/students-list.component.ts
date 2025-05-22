import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentDetailsFormMDComponent } from '../student-details-form-md/student-details-form-md.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  standalone: true,
  imports: [CommonModule, StudentDetailsComponent, StudentDetailsFormMDComponent]
})
export class StudentsListComponent {
  students: Student[]=
  [
    new Student(1,"Nechami","Treger","MivtsaMacabi","0548502887",true,95),
    new Student(2,"Miri","Kats","Yechezkel","0504115559",false,70,new Date(Date.now())),
    new Student(3,"Naama","Levi","Uziel","0556782110",true,80)
  ];
  deleteStudent(id: number){
    const index = this.students.findIndex((s) => s.id === id);
    if (index !== -1) {
    this.students.splice(index,1);
    }}

    selectedStudent: Student=this.students[0];

    ShowDetails(studentToShow: Student){
      this.selectedStudent = studentToShow;
    }
    addStudent() {
      this.selectedStudent = {
        id: 0,
        firstName: '',
        lastName: '',
        address: '',
        gradeAverage: 0,
        phone: '',
        active: true,
      };
  }
  addStudentToList(studentToAdd: Student){
    if (studentToAdd.id === 0) {
      const newId = this.students.length > 0
        ? Math.max(...this.students.map(s => s.id)) + 1
        : 1;
      studentToAdd.id = newId;
      this.students.push(studentToAdd);
    }
    else {
      const index = this.students.findIndex((s) => s.id === studentToAdd.id);
      if (index !== -1) {
        this.students[index] = studentToAdd;
      }
    }
    this.selectedStudent = this.students[0];
   // this.selectedStudent = null;
  }
}
