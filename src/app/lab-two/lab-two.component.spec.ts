import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTwoComponent } from './lab-two.component';

describe('LabTwoComponent', () => {
  let component: LabTwoComponent;
  let fixture: ComponentFixture<LabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
