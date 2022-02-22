import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSevenComponent } from './week-seven.component';

describe('WeekSevenComponent', () => {
  let component: WeekSevenComponent;
  let fixture: ComponentFixture<WeekSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
