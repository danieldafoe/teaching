import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOnePresentationComponent } from './lab-one-presentation.component';

describe('LabOnePresentationComponent', () => {
  let component: LabOnePresentationComponent;
  let fixture: ComponentFixture<LabOnePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabOnePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabOnePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
