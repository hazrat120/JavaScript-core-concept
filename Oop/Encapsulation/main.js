// class BankAccount {
//   #balance;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Deposited: ${amount}`);
//     } else {
//       console.log("Invalid deposit amount.");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`Withdraw: ${amount}`);
//     } else {
//       console.log("Insufficient balance or invalid amount.");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const myAccount = new BankAccount(1000);
// myAccount.deposit(500);
// myAccount.withdraw(300);
// myAccount.withdraw(300);
// myAccount.withdraw(300);

// console.log(myAccount.getBalance());

// Bank Account balance deposite and withdraw
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposite: ${amount}`);
    } else {
      console.log("Invalid balance.");
    }
  }

  withwraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`withdraw: ${amount}`);
    } else {
      console.log("Insuficient balance.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let myAccount = new BankAccount(5000);
myAccount.deposite(500);
myAccount.withwraw(4500);
console.log(myAccount.getBalance());

// student name and grade update and get methods
class Student {
  #name;
  #grade;

  constructor(name, grade) {
    this.#name = name;
    this.#grade = grade;
  }

  getName() {
    return this.#name;
  }

  getGrade() {
    return this.#grade;
  }

  setGrade(newGrade) {
    if (newGrade >= 0 && newGrade <= 100) {
      this.#grade = newGrade;
      console.log(`Grade updated to: ${newGrade}`);
    } else {
      console.log("Invalid grade. Must be between 0 and 100");
    }
  }
}

const student1 = new Student("Ali", 85);
console.log(`Student name: ${student1.getName()}`);
console.log(`Student grade: ${student1.getGrade()}`);

student1.setGrade(955);
console.log(student1.getGrade());
