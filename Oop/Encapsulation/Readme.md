## Encapsulation

Encapsulation হলো Object-Oriented Programming (OOP) এর একটি গুরুত্বপূর্ণ ধারণা। এটি মূলত ডেটা এবং মেথডকে একটি ইউনিট বা অবজেক্টের মধ্যে সীমাবদ্ধ করে রাখে এবং বাইরের অংশ থেকে এই ডেটা অ্যাক্সেস ও পরিবর্তন করা থেকে রক্ষা করে। এই কৌশল প্রোগ্রামিংয়ে ডেটাকে নিরাপদ রাখে এবং ডেটা ও কার্যকলাপকে একত্রিত করে।

### Encapsulation এর উপকারিতা

**ডেটা সুরক্ষা:** Encapsulation এর মাধ্যমে ডেটা বাইরের অবজেক্ট থেকে সরাসরি পরিবর্তন হতে পারে না, যা ডেটা সুরক্ষা নিশ্চিত করে।
**কোডের মডুলারিটি:** Encapsulation এর মাধ্যমে কোডকে ছোট ছোট অংশে ভাগ করা যায়, যা কোডের পুনঃব্যবহারযোগ্যতা এবং রক্ষণাবেক্ষণ সহজ করে তোলে।
**সহজ ইন্টারফেস:** বাইরের অবজেক্ট শুধু পাবলিক মেথডের মাধ্যমে ডেটার সাথে যোগাযোগ করতে পারে, যা সহজ এবং নির্ভরযোগ্য ইন্টারফেস প্রদান করে।

### উদাহরণ: JavaScript এ Encapsulation

নিচের উদাহরণটি একটি `BankAccount` ক্লাস যেখানে ব্যালেন্স ডেটা প্রাইভেট রাখা হয়েছে এবং শুধুমাত্র পাবলিক মেথডের মাধ্যমে এটি অ্যাক্সেস করা যাবে।

```javascript
class BankAccount {
  #balance; // প্রাইভেট ভ্যারিয়েবল

  constructor(initialBalance) {
    this.#balance = initialBalance; // প্রাইভেট ডেটা সেট করা
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log("Insufficient balance or invalid amount");
    }
  }

  getBalance() {
    return this.#balance; // প্রাইভেট ডেটা রিটার্ন করা
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500); // Deposited: 500
myAccount.withdraw(200); // Withdrew: 200
console.log(myAccount.getBalance()); // 1300

myAccount.#balance = 5000; // এটি সরাসরি অ্যাক্সেস করা যাবে না, কারণ এটি প্রাইভেট
```

### উদাহরণের ব্যাখ্যা

**প্রাইভেট ভ্যারিয়েবল:** `#balance` একটি প্রাইভেট ভ্যারিয়েবল, যা বাইরের কোনো অবজেক্ট সরাসরি অ্যাক্সেস করতে পারবে না। `#` সিম্বল দ্বারা প্রাইভেট ভ্যারিয়েবল চিহ্নিত করা হয়।
**পাবলিক মেথড:** `deposit`, `withdraw`, এবং `getBalance` মেথডগুলো পাবলিক মেথড। এগুলো অবজেক্টের ডেটা অ্যাক্সেস ও পরিবর্তনের জন্য ব্যবহৃত হয়।
**সুরক্ষিত ডেটা:** বাইরের অবজেক্ট সরাসরি `#balance` ভ্যারিয়েবলটি অ্যাক্সেস করতে পারে না, তাই ডেটা পরিবর্তনের ক্ষেত্রে কোনো ভুল হওয়ার সম্ভাবনা কমে যায়।

এইভাবে Encapsulation এর মাধ্যমে আমরা JavaScript এ ডেটা সুরক্ষা করতে পারি এবং প্রয়োজনীয় ফাংশনালিটি প্রদানের মাধ্যমে কোডকে আরো স্থিতিশীল এবং নিরাপদ করতে পারি।
