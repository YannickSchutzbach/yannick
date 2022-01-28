import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { MainComponent } from './components/main/main.component';
import { PhotosComponent } from './components/photos/photos.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { APODComponent } from './components/apod/apod.component';
import { KanyeComponent } from './components/kanye/kanye.component';

const routes: Routes = [
  { path:'', component: AppComponent},
  { path:'albums', 
    children:[
      {path:'', component:AlbumsComponent},
      {path:'photos/:albumId', component:PhotosComponent}
    ]},

  { path:'apod', component: APODComponent},
  { path:'weather', component: WeatherComponent},
  { path: 'kanye', component: KanyeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}]
})
export class AppRoutingModule { }
