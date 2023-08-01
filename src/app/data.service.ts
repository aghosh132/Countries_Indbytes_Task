import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  Ali(){
    return this.http.get('https://restcountries.com/v2/all?')
   }
}


