import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { MainComponent } from './components/main/main.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  { path:'', component: AppComponent},
  { path:'albums', 
    children:[
      {path:'', component:AlbumsComponent},
      {path:'photos/:albumId', component:PhotosComponent}
    ]},
  { path:'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
