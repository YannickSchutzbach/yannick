import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  expanded=1;
  constructor() { }

  ngOnInit(): void {
  }

  navMenuToggle(){
    this.expanded= -this.expanded;
    console.log(this.expanded);
  }
}
