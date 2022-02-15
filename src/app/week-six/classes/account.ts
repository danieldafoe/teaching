// The base Account class that will be decorated/modified.
export class Account {
  allowedStreams: number;
  fee: number;
  friendInvites: number;

  constructor() {
    this.allowedStreams = 50;
    this.fee = 0;
    this.friendInvites = 1;
  }

  cost(): number {
    return this.fee;
  }

  invites(): number {
    return this.friendInvites;
  }

  streamsRemaining(): number {
    return this.allowedStreams;
  }
}

// A decorator class that accepts an object of type Account
// and decorates/modifies its values using this class' functionality.
// To use this we would do the following:
// 1. Create an instance of the Account class
//    account = new Account();
// 2. Decorate the existing object with new/changed data
//    account = new Elite(account)
// As you can see, we pass the very first Account instance
// we created into the new class that we use.
export class Elite extends Account {
  account: Account;

  constructor(account: Account) {
    super();
    this.account = account;
  }

  cost(): number {
    return this.account.cost() + 5;
  }

  streamsRemaining(): number {
    return this.account.streamsRemaining() + 250;
  }
}

// A decorator class that accepts an object of type Account
// and decorates/modifies its values using this class' functionality.
// To use this we would do the following:
// 1. Create an instance of the Account class
//    account = new Account();
// 2. Decorate the existing object with new/changed data
//    account = new Premium(account)
// As you can see, we pass the very first Account instance
// we created into the new class that we use.
// Note: It is possible to not only extend our original Account
// class, but also an Elite class:
// account = new Account()
// account = new Elite(account)
// account = new Premium(account)
export class Premium extends Account {
  account: Account;

  constructor(account: Account) {
    super();
    this.account = account;
  }

  cost(): number {
    return this.account.cost() + 10;
  }

  streamsRemaining(): number {
    return this.account.streamsRemaining() + 700;
  }
}

