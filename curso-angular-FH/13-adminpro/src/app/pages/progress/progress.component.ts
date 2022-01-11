import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls:['./progress.component.css']
})
export class ProgressComponent  {
 progreso1: number = 25;
 progreso2: number = 40;

 get getPercentage1(){
   return `${this.progreso1}%`;
  }

 get getPercentage2(){
   return `${this.progreso2}%`;
  }

  childChangedValue( value: number ){
    console.log('Hey', value)
  }

}
