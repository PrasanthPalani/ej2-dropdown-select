import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import the DropDownListModule for the DropDownList component
import { DropDownListModule } from '@syncfusion/ej2-ng-dropdowns';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-ng-dropdowns module into NgModule
  imports:      [ BrowserModule, FormsModule, DropDownListModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
