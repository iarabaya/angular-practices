import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueChangerComponent } from './value-changer/value-changer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ValueChangerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ValueChangerComponent
  ]
})
export class ComponentsModule { }
