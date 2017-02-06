import { Component } from '@angular/core';
import {Formcontrol } from '../formcontrol';
import {GeneratorService } from '../generator.service';

@Component({
  selector: 'af-view-form',
  templateUrl: './view-form.component.html'
})
export class ViewFormComponent  {
formArray:Formcontrol[];
constructor(private add:GeneratorService){
  //read data from array
this.formArray = this.add.formArrayPull();
console.log(this.formArray);
}
}
