import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LabThreeComponent } from './lab-three.component';



describe('LabThreeComponent', () => {
  let component: LabThreeComponent;
  let fixture: ComponentFixture<LabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ LabThreeComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it ('convertToFloat', () => {
    expect(component.convertToFloat('1.2')).toEqual(1.2);
  });
});
