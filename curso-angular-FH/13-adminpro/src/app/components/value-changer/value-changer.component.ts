import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-changer',
  templateUrl: './value-changer.component.html',
  styles: [
  ]
})
export class ValueChangerComponent implements OnInit{
  
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso: number = 30;
  @Input() btnClass: string = 'btn-primary';
  // @Input() progreso: number = 30;

  @Output('valor') outputValue: EventEmitter<number> = new EventEmitter();


  changeValue( value: number ){
    if (this.progreso >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return this.progreso = 100;
    }
    
    if (this.progreso <= 0 && value <= 0) {
      this.outputValue.emit(0);
      return this.progreso = 0;
    }
    
    this.progreso = this.progreso + value
    this.outputValue.emit(this.progreso);
    return this.progreso;
  }

  onChange(newValue: number){
    if( newValue >= 100){
      this.progreso = 100
    }else if(newValue<=0){
      this.progreso = 0
    }else{
      this.progreso = newValue
    }
    this.outputValue.emit(this.progreso);
  }
}
