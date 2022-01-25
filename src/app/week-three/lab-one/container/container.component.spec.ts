import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent1 } from './container.component';

describe('ContainerComponent1', () => {
  let component: ContainerComponent1;
  let fixture: ComponentFixture<ContainerComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
