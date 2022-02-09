import { Component, HostListener } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yannick';

  public getScreenWidth: any;
  public getScreenHeight: any;
  public mobile:boolean=false;
  
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
      if (this.getScreenWidth<360) {
        this.mobile=true;
      }else{
        this.mobile=false;
      }
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth<360) {
      this.mobile=true;
    }else{
      this.mobile=false;
    }
  }

}
