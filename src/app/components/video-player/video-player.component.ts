import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {

  // 该链接是香港某电视台的直播流链接，请放心使用
  url =  'rtmp://58.200.131.2:1935/livetv/cctv4';
  // url = 'rtmp://192.168.50.202:1935/myapp/testav';
  safeUrl: any;

  @ViewChild('video', {static: true}) videoEl;

  constructor(private sanitizer: DomSanitizer, private el: ElementRef) {
    // this.getUrl(this.url);
  }

  ngOnInit(): void {
    // setTimeout(() => {
      const win = this.el.nativeElement;
      console.log(`height: ${win.clientHeight}, width: ${win.clientWidth}`);
      console.log(this.videoEl.nativeElement.style);

      // const videoLementStyle = cloneDeep(this.videoEl.nativeElement.style);

      // videoLementStyle.height =  win.clientHeight + 'px';
      // videoLementStyle.width =  win.clientWidth + 'px';
      // this.videoEl.nativeElement.style = videoLementStyle;

      // this.videoEl.nativeElement.style = {
      //   height: win.clientHeight + 'px',
      //   width: win.clientWidth + 'px'
      // };

      // this.videoEl.nativeElement.style.height = '400px';
      // this.videoEl.nativeElement.style.width = win.clientWidth + 'px';
      // console.log('height: ' + this.videoEl.nativeElement.clientHeight);
      // console.log('width: ' + this.videoEl.nativeElement.clientWidth);
      this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.url);  // 获取安全链接
    // }, 0);
  }

  getUrl(url: string) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);  // 获取安全链接
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   const win = this.el.nativeElement;
    //   console.log(`height: ${win.clientHeight}, width: ${win.clientWidth}`);
    //   console.log(this.videoEl.nativeElement.style);

    //   // const videoLementStyle = cloneDeep(this.videoEl.nativeElement.style);

    //   // videoLementStyle.height =  win.clientHeight + 'px';
    //   // videoLementStyle.width =  win.clientWidth + 'px';
    //   // this.videoEl.nativeElement.style = videoLementStyle;

    //   // this.videoEl.nativeElement.style = {
    //   //   height: win.clientHeight + 'px',
    //   //   width: win.clientWidth + 'px'
    //   // };

    //   this.videoEl.nativeElement.style.height = win.clientHeight + 'px';
    //   this.videoEl.nativeElement.style.width = win.clientWidth + 'px';

    //   console.log('height: ' + this.videoEl.nativeElement.clientHeight);
    //   console.log('width: ' + this.videoEl.nativeElement.clientWidth);
    //   this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.url);  // 获取安全链接
    // }, 10);

  }

}
