import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() { 
    //pasar los tres callbacks solos esta deprecado
    //se debe pasar un argumento Observer con cada key especifica
    //https://rxjs.dev/deprecations/subscribe-arguments 
    // this.returnObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: value => console.log('Subs:', value), 
    //   error: err => console.warn('Error', err),
    //   complete: () => console.info('Finished obs') 
    // });

    // this.returnInterval().subscribe({
    //   next: value => console.log(value)
    // })
    //se puede pasar el callback asi
    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

  returnInterval(): Observable<number>{
    // const interval$ = interval(1000).pipe(
                                      // take(4),
                                      // map( value =>{
                                      //   value + 1
                                      //   return 'Hola mundo ' + value
                                      // } )
                                      // );
    // return interval$;
    return interval(1000)
            .pipe(
              map(value => value + 1), // 0 => 1
              filter(value => value%2 === 0),
              take(10),    
            );
  }

  returnObservable(): Observable<number>{
    let i = -1;

    //observable que quiero almacenar lleva $, ej
    // const obs$ = new Observable<number>( ...
    return new Observable<number>( observer => {
      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        //el error cancela el complete y corta el observable
        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000)
    });

    // return obs$;
  }


}
