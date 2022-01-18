import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekThreePageTwoComponent } from './week-three-page-two.component';

describe('WeekThreePageTwoComponent', () => {
  let component: WeekThreePageTwoComponent;
  let fixture: ComponentFixture<WeekThreePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekThreePageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekThreePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
