import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoOfTheDayServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAPOD(){
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=iw9hgyEQ9KFAPwGl1f7h2ZoBu1LQVykJW4aKHw0E&hd=true`)
  }
}
