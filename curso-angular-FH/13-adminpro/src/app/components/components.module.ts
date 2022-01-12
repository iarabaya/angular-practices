import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { ValueChangerComponent } from './value-changer/value-changer.component';
import { DoughnutComponent } from './doughnut/doughnut.component';


@NgModule({
  declarations: [
    ValueChangerComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports:[
    ValueChangerComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
