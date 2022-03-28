import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'week-eleven',
  templateUrl: './week-eleven.component.html',
  styleUrls: ['./week-eleven.component.scss']
})
export class WeekElevenComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: ['']
    });
  }

  updateName(name: string) {
    this.signupForm.get('firstName')?.setValue(name || '');
  }

}
