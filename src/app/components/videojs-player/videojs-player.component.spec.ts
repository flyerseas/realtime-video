import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojsPlayerComponent } from './videojs-player.component';

describe('VideojsPlayerComponent', () => {
  let component: VideojsPlayerComponent;
  let fixture: ComponentFixture<VideojsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
