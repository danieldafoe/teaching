import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TransactionService } from '../services/transactions.service';

@Component({
  selector: 'account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss']
})
export class AccountBalanceComponent implements OnInit {
  // Create a number to that gets
  // decreased by whatever amount gets
  // emitted by the purchases$ Observable
  // in transactions.service.ts
  balance: number = 1000;

  // Injects the TransactionService into this component
  // so that we can use its functionality
  constructor(private transactionService: TransactionService) { }

  // Subscribe to the purchases$ Observable and
  // decrease the balance property of this class by
  // whatever amount gets emitted by the Observable
  ngOnInit(): void {
    this.transactionService.purchases$.subscribe((value) => {
      // This is a shorthand way of saying:
      this.balance-= value;
    });
  }

}
