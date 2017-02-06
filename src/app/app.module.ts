import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { RouterModule } from "@angular/router";
import {GeneratorService } from './generator.service';


import { AppComponent } from './app.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { TesterComponent } from './tester/tester.component';
import { TextfieldComponent } from './textfield.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    ViewFormComponent,
    TesterComponent,
    TextfieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
