import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import {StudentsListComponent} from "./students-list/students-list.component"

@NgModule({
    declarations:[],
    imports:[BrowserModule, StudentsListComponent, CommonModule,AppComponent],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}