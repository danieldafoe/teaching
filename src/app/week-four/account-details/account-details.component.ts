import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TransactionService } from '../services/transactions.service';

@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  transactions: number[] = [];

  // Injects the TransactionService into this component 
  // so that we can use its functionality
  constructor(private transactionService: TransactionService) { }

  // Subscribe to the purchases$ Observable and
  // add each new value emittted by it
  // to the transactions array
  ngOnInit(): void {
    this.transactionService.purchases$.subscribe((value) => {
      this.transactions.push(value);
    });
  }

}
