import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherData;
  public location: string ="Frankfurt";


  constructor(
    public weatherService: WeatherService
  ) { }

  ngOnInit(): void {
     this.weatherService.getWeather(this.location).subscribe(data => {
       this.weatherData = data;
       console.log(this.weatherData);
     })
    
  }

  setWeatherData(loc) {
    this.weatherService.getWeather(loc).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })}

  setLocation(loc){
    event?.preventDefault();
    this.setWeatherData(loc);
  }
}
