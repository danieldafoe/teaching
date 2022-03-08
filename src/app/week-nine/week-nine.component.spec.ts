import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekNineComponent } from './week-nine.component';

describe('WeekNineComponent', () => {
  let component: WeekNineComponent;
  let fixture: ComponentFixture<WeekNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
