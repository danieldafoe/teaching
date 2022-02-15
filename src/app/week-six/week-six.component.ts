import { Component, OnInit } from '@angular/core';
import { Account, Elite, Premium } from './classes/account';

@Component({
  selector: 'week-six',
  templateUrl: './week-six.component.html',
  styleUrls: ['./week-six.component.scss']
})
export class WeekSixComponent implements OnInit {
  // Variable to hold a new Account object
  // This will be updated when someone wants to
  // Purchase a new tier for the account
  account!: Account;

  constructor() { }

  ngOnInit(): void {
    // We are creating a new Account object
    // This will use all of the initial values
    // from the Account class in classes/account.ts
    this.account = new Account();
  }

  // When someone clicks the first button in 
  // week-six.component.html, we update our variable
  // by passing the existing Account object we created
  // into a new class called Elite that will change
  // some of the underlying values
  addElitePackage(): void {
    this.account = new Elite(this.account);
  }

  // When someone clicks the second button in 
  // week-six.component.html, we update our variable
  // by passing the existing Account object we created
  // into a new class called Premium that will change
  // some of the underlying values
  addPremiumPackage(): void {
    this.account = new Premium(this.account);
  }

}
