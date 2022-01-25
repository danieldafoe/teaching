import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOneComponent } from './lab-one.component';

describe('LabOneComponent', () => {
  let component: LabOneComponent;
  let fixture: ComponentFixture<LabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
