import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as cyberplayer from 'src/assets/cyberplayer';

@Component({
  selector: 'app-cyberplayer-video',
  templateUrl: './cyberplayer-video.component.html',
  styleUrls: ['./cyberplayer-video.component.less']
})
export class CyberplayerVideoComponent implements OnInit, OnDestroy {
  player: any;
  @ViewChild('player', { static: true }) plaryEl;

  constructor() { }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.remove();
    }
  }

  ngOnInit(): void {
    console.log(cyberplayer);
    this.player = cyberplayer(this.plaryEl.nativeElement).setup({
      flashplayer: '/assets/cyberplayer.flash.swf',
      stretching: 'uniform',
      file: 'rtmp://58.200.131.2:1935/livetv/cctv4', // 'rtmp://58.200.131.2:1935/livetv/cctv4',
      // image: "视频源封面图片链接",
      width: '100%',
      height: '100%',
      autostart: true,
      repeat: false,
      volume: 100,
      controls: true,
      controlbar: {
        barLogo: false
      },
      ak: '92d97c6741c545939cbf0d1ac1d91780'
    });
  }

}
