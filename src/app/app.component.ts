import { Component } from "@angular/core";
import { StudentsListComponent } from "./students-list/students-list.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [StudentsListComponent]
  /*template: `
    <h1>{{title}}</h1>
    <h2>{{getGreeting()}}</h2>
    <app-students-list></app-students-list> `*/
})
export class AppComponent {
  title = 'My-app';

  constructor() {}

  calc() {
    return 0;
  }

  getGreeting(): string {
    const now = new Date().getHours();
    if (now >= 5 && now <= 12)
      return "בוקר טוב";
    if (now >= 13 && now <= 18)
      return "צהריים טובים";
    else
      return "לילה טוב";
  }
}
