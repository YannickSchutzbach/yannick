import { Component, HostListener, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherData;
  public location: string ="";
  getScreenWidth;
  getScreenHeight;
  mobile:boolean=false;


  constructor(
    public weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth<750) {
      this.mobile=true;
    }else{
      this.mobile=false;
    }
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

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth<750) {
      this.mobile=true;
    }else{
      this.mobile=false;
    }
  }

}
