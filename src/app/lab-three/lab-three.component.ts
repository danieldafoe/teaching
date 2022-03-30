import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Create a global constant for the tax amount.
const TAX = '1.13';

@Component({
  selector: 'lab-three',
  templateUrl: './lab-three.component.html',
  styleUrls: ['./lab-three.component.scss']
})
export class LabThreeComponent implements OnInit {
  taxForm!: FormGroup;
  totalWithTax!: number;

  // Inject FormBuilder so we can easily create a form group.
  constructor(private fb: FormBuilder) { }

  // TODO: Write example test for testing this method
  ngOnInit(): void {
    // Initialize our form group.
    this.taxForm = this.fb.group({
      amount: [''],
      taxAmount: [TAX]
    });
  }

  // Calculates the total cost of an item given an amount and the
  // amount of tax to charge. The second parameter has a default value
  // of 1.13 from the TAX constant. (Line 5)
  calculateTotal(amount: string, taxAmount: string = TAX): void {
    this.totalWithTax = this.convertToFloat(amount) * this.convertToFloat(taxAmount);
  }

  // A simple function for converting a string number to a
  // JavaScript float.
  convertToFloat(value: string): number {
    return parseFloat(value);
  }
}
