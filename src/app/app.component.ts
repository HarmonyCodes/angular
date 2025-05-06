import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
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
