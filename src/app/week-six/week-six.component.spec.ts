import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSixComponent } from './week-six.component';

describe('WeekSixComponent', () => {
  let component: WeekSixComponent;
  let fixture: ComponentFixture<WeekSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
