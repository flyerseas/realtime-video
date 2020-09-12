import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyberplayerVideoComponent } from './components/cyberplayer-video/cyberplayer-video.component';
import { HomeComponent } from './components/home/home.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideojsPlayerComponent } from './components/videojs-player/videojs-player.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'video', component: VideoPlayerComponent },
  { path: 'videojs', component: VideojsPlayerComponent },
  { path: 'cyberplayer', component: CyberplayerVideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
