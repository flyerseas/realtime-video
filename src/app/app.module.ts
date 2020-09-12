import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HomeComponent } from './components/home/home.component';
import { CyberplayerVideoComponent } from './components/cyberplayer-video/cyberplayer-video.component';
import { VideojsPlayerComponent } from './components/videojs-player/videojs-player.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    HomeComponent,
    CyberplayerVideoComponent,
    VideojsPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
