import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userstory2containerComponent } from './userstory2container.component';

describe('Userstory2containerComponent', () => {
  let component: Userstory2containerComponent;
  let fixture: ComponentFixture<Userstory2containerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userstory2containerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Userstory2containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
