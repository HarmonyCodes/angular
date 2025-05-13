import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import {StudentsListComponent} from "./students-list/students-list.component"
import { StudentDetailsComponent } from "./student-details/student-details.component";

@NgModule({
    declarations:[],
    imports:[BrowserModule, StudentsListComponent, CommonModule,AppComponent, StudentDetailsComponent],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}