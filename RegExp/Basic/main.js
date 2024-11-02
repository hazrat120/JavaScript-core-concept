//  Regular Expression syntax

//  {/pattern/modifiers;}  /hello world/i;

let pattern = /hello world/;
console.log(pattern);

let text = "Hello World! Hello My World!";
let text_pattern = /hello/gi;
let result = text.match(text_pattern);
console.log(result); //  ans: [ 'Hello', 'Hello' ]

// g : গ্লোবাল সার্চ, পুরো স্ট্রিং খুঁজবে।
// i : কেস ইনসেন্সিটিভ সার্চ, বড় ছোট হাতের পার্থক্য থাকবে না।
// m : মাল্টি-লাইন মোড।

//  JavaScript-এর match() মেথডটি স্ট্রিং থেকে নির্দিষ্ট প্যাটার্ন বা নিয়ম অনুসারে ডেটা খুঁজে বের করতে ব্যবহৃত হয়। এটি সাধারণত রেগুলার এক্সপ্রেশন (Regular Expressions) ব্যবহার করে খোঁজার কাজটি করে। match() মেথডটি স্ট্রিং-এর একটি মেথড, এবং এটি একটি অ্যারে (array) বা null রিটার্ন করে।

let myself = "Hello my name is Hazrat Ali";
let myselfPattern = /hazrat Ali/i;
console.log(myselfPattern.test(myself)); // and is: true

// JavaScript-এ test() মেথডটি রেগুলার এক্সপ্রেশন অবজেক্টের একটি মেথড, যা কোনো স্ট্রিংয়ের মধ্যে নির্দিষ্ট প্যাটার্ন আছে কিনা তা পরীক্ষা করে। এটি একটি বুলিয়ান ভ্যালু রিটার্ন করে: যদি ম্যাচ পাওয়া যায়, তাহলে true; আর না পাওয়া গেলে false।

let text1 = "Hello World! Hello Universe!";
let universPattern = /Hello/g;
console.log(text1.match(universPattern));
