import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: [
  ]
})
export class ChartsComponent {
 public labels1: string[] = [ 'Descargas de Ventas', 'Ventas presenciales', 'Ventas por Email' ];
 public data1: number[] = [ 350, 450, 50 ]
 public data2: number[] = [ 30, 100, 55 ]
}
