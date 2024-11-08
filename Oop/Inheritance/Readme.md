JavaScript-এ Inheritance বা ইনহেরিটেন্স বলতে বোঝায় যখন একটি ক্লাস (class) অন্য একটি ক্লাসের বৈশিষ্ট্য (properties) এবং আচরণ (methods) নিজের মধ্যে গ্রহণ করে। এতে করে আমরা কোড পুনরায় ব্যবহার করতে পারি এবং একটি সাধারণ কাঠামো থেকে নির্দিষ্ট ধরন তৈরি করতে পারি।

ধরা যাক, আমরা একটি `Vehicle` নামের ক্লাস তৈরি করেছি। এখন এই `Vehicle` ক্লাসটি থেকে আমরা `Car`, `Bike`, `Bus` ইত্যাদি ক্লাস তৈরি করতে চাই, যেগুলো `Vehicle`-এর বৈশিষ্ট্যগুলোর পাশাপাশি নিজেদের বিশেষ বৈশিষ্ট্যও থাকবে। JavaScript-এ এটি করতে `extends` কীওয়ার্ড ব্যবহার করা হয়, যা নির্দেশ করে যে একটি ক্লাস অন্য একটি ক্লাস থেকে ইনহেরিট করছে।

### উদাহরণ:

একটি `Vehicle` ক্লাস এবং এর থেকে ইনহেরিট করে `Car` এবং `Bike` ক্লাস তৈরি করা যাক।

```javascript
// মূল ক্লাস: Vehicle
class Vehicle {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  move() {
    console.log(`${this.name} is moving at ${this.speed} km/h`);
  }
}

// Car ক্লাস, যা Vehicle ক্লাস থেকে ইনহেরিট করেছে
class Car extends Vehicle {
  constructor(name, speed, fuelType) {
    super(name, speed); // প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল করার জন্য super() ব্যবহার করা হয়েছে
    this.fuelType = fuelType;
  }

  refuel() {
    console.log(`${this.name} is refueling with ${this.fuelType}`);
  }
}

// Bike ক্লাস, যা Vehicle ক্লাস থেকে ইনহেরিট করেছে
class Bike extends Vehicle {
  constructor(name, speed, hasCarrier) {
    super(name, speed);
    this.hasCarrier = hasCarrier;
  }

  carry() {
    if (this.hasCarrier) {
      console.log(`${this.name} has a carrier for carrying items.`);
    } else {
      console.log(`${this.name} does not have a carrier.`);
    }
  }
}

// উদাহরণ হিসেবে অবজেক্ট তৈরি
const myCar = new Car("Toyota", 120, "Petrol");
myCar.move(); // Toyota is moving at 120 km/h
myCar.refuel(); // Toyota is refueling with Petrol

const myBike = new Bike("Honda", 60, true);
myBike.move(); // Honda is moving at 60 km/h
myBike.carry(); // Honda has a carrier for carrying items.
```

### কীভাবে কাজ করছে:

1. **মূল ক্লাস** - `Vehicle`: এখানে একটি সাধারণ ভেহিকল বা যানবাহনের বৈশিষ্ট্য (`name` এবং `speed`) এবং আচরণ (`move` মেথড) ডিফাইন করা হয়েছে।

2. **ইনহেরিট করা ক্লাস** - `Car` এবং `Bike`: এই দুইটি ক্লাস `Vehicle` থেকে ইনহেরিট করেছে। এর মানে হচ্ছে, তারা `Vehicle` এর সকল প্রপার্টি এবং মেথড পাবে। অতিরিক্তভাবে, তারা নিজেদের আলাদা প্রপার্টি (`fuelType` এবং `hasCarrier`) এবং মেথড (`refuel` এবং `carry`) ডিফাইন করতে পারে।

3. **super()**: `Car` এবং `Bike` এর কনস্ট্রাক্টরে `super()` ব্যবহার করা হয়েছে, যা প্যারেন্ট ক্লাসের কনস্ট্রাক্টরকে কল করে এবং মূল প্রপার্টিগুলো সেট করে।

### ইনহেরিটেন্স-এর সুবিধা

- **কোড পুনরায় ব্যবহার**: `Vehicle` এর মতো সাধারণ বৈশিষ্ট্যগুলো পুনরায় লিখতে হচ্ছে না, বরং অন্যান্য ক্লাসে তা ইনহেরিট করা যাচ্ছে।
- **সহজতর রক্ষণাবেক্ষণ**: কোড পরিবর্তন বা আপডেট করা সহজ হয়, কারণ মূল বৈশিষ্ট্যগুলো একটি সাধারণ জায়গায় রাখা হয়েছে।

JavaScript-এ ইনহেরিটেন্স OOP (Object-Oriented Programming) এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য, যা কোডকে আরও মডুলার এবং পুনঃব্যবহারযোগ্য করে তোলে।
