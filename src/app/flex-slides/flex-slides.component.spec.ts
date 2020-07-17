import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSlidesComponent } from './flex-slides.component';

describe('FlexSlidesComponent', () => {
  let component: FlexSlidesComponent;
  let fixture: ComponentFixture<FlexSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
