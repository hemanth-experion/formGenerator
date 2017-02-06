import { Injectable } from '@angular/core';
import {Formcontrol } from './formcontrol';
@Injectable()
export class GeneratorService {

  constructor() { }

formArray:Formcontrol[]=[];
formArrayPush(formObject:Formcontrol,index){
  this.formArray[index]=formObject;

}
formArrayPull(){
  return this.formArray;
}
}
