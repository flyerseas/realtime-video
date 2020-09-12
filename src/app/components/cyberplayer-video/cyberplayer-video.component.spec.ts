import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberplayerVideoComponent } from './cyberplayer-video.component';

describe('CyberplayerVideoComponent', () => {
  let component: CyberplayerVideoComponent;
  let fixture: ComponentFixture<CyberplayerVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberplayerVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberplayerVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
