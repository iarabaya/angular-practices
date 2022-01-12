import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {

// Doughnut
  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];

  @Input() data: number[] = [100,100,100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data },
    ]
  };
//como los inputs tardan en llegar se tiene que sobreescribir los datos por defecto
//y hacer los cambios en base a eso
  ngOnChanges(changes: SimpleChanges): void{
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{
        data: this.data,
        backgroundColor:['#6857E6','#009FEE','#F02059'],
        hoverBackgroundColor: ['#6857E6','#009FEE','#F02059'],
        hoverBorderColor: ['yellow']
      }]
    }
  }

}
