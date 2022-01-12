import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
 public labels1: string[] = [ 'Descargas de Ventas', 'Ventas presenciales', 'Ventas por Email' ];
 public data1: number[] = [ 350, 450, 50 ]
 public data2: number[] = [ 30, 100, 55 ]
}
