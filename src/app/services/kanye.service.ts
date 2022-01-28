import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KanyeService {

  constructor(
    private http: HttpClient
  ) { }

  getQuote(){
    return this.http.get('https://api.kanye.rest');
  }
}
