import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekFourComponent } from './week-four.component';

describe('WeekFourComponent', () => {
  let component: WeekFourComponent;
  let fixture: ComponentFixture<WeekFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
