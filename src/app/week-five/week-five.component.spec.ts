import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekFiveComponent } from './week-five.component';

describe('WeekFiveComponent', () => {
  let component: WeekFiveComponent;
  let fixture: ComponentFixture<WeekFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
