import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationalComponent1 } from './presentational.component';

describe('PresentationalComponent1', () => {
  let component: PresentationalComponent1;
  let fixture: ComponentFixture<PresentationalComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationalComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationalComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
