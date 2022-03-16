import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTenComponent } from './week-ten.component';

describe('WeekTenComponent', () => {
  let component: WeekTenComponent;
  let fixture: ComponentFixture<WeekTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
