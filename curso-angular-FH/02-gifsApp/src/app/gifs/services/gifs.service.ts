import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API_KEY : string = 'jSeXdslykmSi2uaP3OOgGBTwtKlrVxnV';
  private _historial: string[] = [];


  get historial(){
    return [...this._historial];
  }
  
  constructor( private http: HttpClient){}
  
  buscarGifs( query: string = '' ){

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes( query )){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
    
    this.http.get('api.giphy.com/v1/gifs/search?api_key=jSeXdslykmSi2uaP3OOgGBTwtKlrVxnV&q=dragon ball&limit=10')
    .subscribe((res: any) => {
      console.log(res.data);
    });

    console.log(this._historial);
  }

}
