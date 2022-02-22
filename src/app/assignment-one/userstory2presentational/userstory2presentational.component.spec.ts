import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userstory2presentationalComponent } from './userstory2presentational.component';

describe('Userstory2presentationalComponent', () => {
  let component: Userstory2presentationalComponent;
  let fixture: ComponentFixture<Userstory2presentationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userstory2presentationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Userstory2presentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
