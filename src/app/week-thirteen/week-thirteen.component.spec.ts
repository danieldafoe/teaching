import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekThirteenComponent } from './week-thirteen.component';

describe('WeekThirteenComponent', () => {
  let component: WeekThirteenComponent;
  let fixture: ComponentFixture<WeekThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
