import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherData;
  location;


  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeather("London").subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
    
  }

}
