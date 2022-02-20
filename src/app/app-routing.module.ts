import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { APODComponent } from './components/apod/apod.component';
import { KanyeComponent } from './components/kanye/kanye.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

const routes: Routes = [
  { path:'', component: FrontpageComponent},
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
