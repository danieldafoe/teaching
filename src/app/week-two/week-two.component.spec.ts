import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTwoComponent } from './week-two.component';

describe('WeekTwoComponent', () => {
  let component: WeekTwoComponent;
  let fixture: ComponentFixture<WeekTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
