import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { isBuffer } from 'util';
import videojs from 'video.js';
import videojs_flash from 'videojs-flash';

@Component({
  selector: 'app-videojs-player',
  templateUrl: './videojs-player.component.html',
  styleUrls: ['./videojs-player.component.less']
})
export class VideojsPlayerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('videoContainer', { static: true }) containerEl;
  @ViewChild('target', { static: true }) targetEl;
  player: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(videojs);
    // console.log(videoflash);
    const containerStyle = this.containerEl.nativeElement;
    console.log(`height: ${containerStyle.clientHeight}, width: ${containerStyle.clientWidth}`);
    const option = {
      autoplay: true,
      controls: true,
      // responsive: true,
      // fluid: true,
      height: containerStyle.clientHeight,
      width: containerStyle.clientWidth,
      sources: [{
        src: 'rtmp://58.200.131.2:1935/livetv/cctv4',
        type: 'rtpm/flv' // 'video/mp4'
      }],
      flash: {
        swf: 'assets/video-js.swf'
      }
    };
    videojs.registerPlugin('videojs-flash', videojs_flash);
    this.player = videojs(this.targetEl.nativeElement, option, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
    const flash = videojs.getPlugin('videojs-flash');
    console.log(flash);
    console.log(this.player);
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }

  @HostListener('window:resize')
  resize() {
    if (this.player) {
      const containerStyle = this.containerEl.nativeElement;
      this.player.height(containerStyle.clientHeight);
      this.player.width(containerStyle.clientWidth);
    }
  }

}
