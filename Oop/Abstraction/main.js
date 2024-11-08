// Example
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(500);

myAccount.deposit(200);
console.log(myAccount.getBalance());
