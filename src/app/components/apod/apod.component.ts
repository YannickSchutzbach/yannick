import { Component, OnInit } from '@angular/core';
import { PhotoOfTheDayServiceService } from 'src/app/services/photo-of-the-day-service.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class APODComponent implements OnInit {
  photoData;
  picture : boolean=true;
  constructor(
    private photoOfTheDayService: PhotoOfTheDayServiceService,
    
  ) { }

  ngOnInit(): void {
    this.photoOfTheDayService.getAPOD().subscribe(data => {
      this.photoData = data;
      if (this.photoData.media_type==="video") {
        this.picture=false;
      }
    })
  }

}
