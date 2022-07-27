import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IWoman } from './models/woman.models';

@Injectable({
  providedIn: 'root'
})
export class WomansService {

  public emitValue: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) { 

  }
  //metodo para recuperar los personajes de la api
  //se usa Observable para tratar la asincronia

  public getWomans(): Observable<IWoman[]> {
    return this.httpClient.get<IWoman[]>('https://62e04dfafa8ed271c481d1ba.mockapi.io/womans');
  }
    //método para recuperar los personajes por NAME
    public getWomanByName(womanId: string): Observable<IWoman> {
      return this.httpClient.get<IWoman>(
        `https://62e04dfafa8ed271c481d1ba.mockapi.io/womans${womanId}`
      );
    }
  
    //método para crear personaje
    public addWoman(body: IWoman): Observable<IWoman> {
      return this.httpClient.post<IWoman>(
        'https://62e04dfafa8ed271c481d1ba.mockapi.io/womans',
        body
      );
    }
  
    //método para modificar personaje
    public editWoman(idWoman: string, body: IWoman): Observable<IWoman> {
      return this.httpClient.put<IWoman>(
        `https://62e04dfafa8ed271c481d1ba.mockapi.io/womans${idWoman}`,
        body
      );
    }
  
    //método para eliminar personaje
    public deleteWoman(idWoman: string): Observable<IWoman> {
      return this.httpClient.delete<IWoman>(
        `https://62e04dfafa8ed271c481d1ba.mockapi.io/womans${idWoman}`
      );
    }
}
