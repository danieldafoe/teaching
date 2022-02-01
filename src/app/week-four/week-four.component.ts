import { Component } from '@angular/core';
import { TransactionService } from './services/transactions.service';

@Component({
  selector: 'week-four',
  templateUrl: './week-four.component.html',
  styleUrls: ['./week-four.component.scss']
})
export class WeekFourComponent {
  // Injects the TransactionService into this component 
  // so that we can use its functionality
  constructor(private transactionService: TransactionService) { }

  // A method called when the button in the interface
  // is clicked so that we make a faux purchase
  makePurchase(): void {
    this.transactionService.purchase();
  }
}
