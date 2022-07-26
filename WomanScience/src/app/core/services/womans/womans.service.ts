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

  public getWomans(): Observable<IWoman[]> {
    return this.httpClient.get<IWoman[]>('http://localhost:4000/characters');
  }
}
