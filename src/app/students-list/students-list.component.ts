import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class StudentsListComponent {
  students: Student[]=
  [
    new Student(1,"Nechami","Treger","MivtsaMacabi","0548502887",true,95),
    new Student(2,"Miri","Kats","Yechezkel","0504115559",false,70),
    new Student(3,"Naama","Levi","Uziel","0556782110",true,80)
  ];
}
