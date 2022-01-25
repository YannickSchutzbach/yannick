import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http:HttpClient
  ) { }

  getWeather(location: string){
    
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=24e68aa62aee029abd3379e7151a2fee`)
  }
}
