import { Component, HostListener, OnInit } from '@angular/core';
import { KanyeService } from 'src/app/services/kanye.service';
import { MatGridList } from '@angular/material/grid-list';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-kanye',
  templateUrl: './kanye.component.html',
  styleUrls: ['./kanye.component.scss']
})


export class KanyeComponent implements OnInit {
  quote;
  number;
  public getScreenWidth: any;
  public getScreenHeight: any;
  public mobile:boolean=false;
  
  constructor(
    private kanyeService :KanyeService
  ) { }


  ngOnInit(): void {
    this.kanyeService.getQuote().subscribe(data =>{
      this.quote=data;
    });
    this.number = Math.round(Math.random() * (2));
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth<750) {
      this.mobile=true;
    }else{
      this.mobile=false;
    }
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
