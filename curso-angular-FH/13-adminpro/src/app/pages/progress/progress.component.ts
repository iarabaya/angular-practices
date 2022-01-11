import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls:['./progress.component.css']
})
export class ProgressComponent  {

  progreso: number = 30;

  get getPercentage(){
    return `${this.progreso}%`;
  }

  changeValue( value: number ){
    if (this.progreso >= 100 && value >= 0) {
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && value <= 0) {
      return this.progreso = 0;
    }
     
    return this.progreso = this.progreso + value
  }
}
