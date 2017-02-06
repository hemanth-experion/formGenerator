import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Formcontrol } from '../formcontrol';
import {GeneratorService } from '../generator.service';
import { Router } from "@angular/router";


@Component({
  selector: 'af-create-form',
  templateUrl: './create-form.component.html'
})
export class CreateFormComponent {
  constructor(private add: GeneratorService, private router: Router) { }
  rowGroupIds: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //form group identifer for 10 rows
  orderFieldValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//dropdown values for orderfield
  checkOrder: number[] = [];//array used to store the order submitted
  indexByOrder: number;//used to temporarily store the user specified order of a selected form group

  onSubmit(f) {
    //function set input control class labels as visible or hide
    for (let i in this.rowGroupIds) {
      if (f[i].controlIsVisible !== true) {
        f[i].controlIsVisible = true;
      }
      else {
        f[i].controlIsVisible = false;
      }

      this.indexByOrder = f[i].controlOrder - 1; //since array index starts from zero
      //add to array object one by one
      this.add.formArrayPush(new Formcontrol(f[i].controlLabel, f[i].controlName, f[i].controlIsVisible, f[i].contolIsReadOnly), this.indexByOrder);

    }
    //after submit the data navigate to view page
    this.router.navigate(['view']);
  }
  //works on on change of order field
  onChangeValidate(i) {
    if (this.checkOrder.indexOf(i) != -1) {//search for same order number is present or not
      alert("Order already selected");
    }
    else {
      this.checkOrder.push(i);//if order number is not present insert to array

    }
  }

}
