// JavaScript-এ রেগুলার এক্সপ্রেশন সাধারণত দুটি স্ট্রিং মেথডের সাথে ব্যবহৃত হয়: search() এবং replace()।

// => search() মেথড: এই মেথডটি একটি এক্সপ্রেশন ব্যবহার করে ম্যাচ খোঁজে এবং ম্যাচ পাওয়া গেলে তার পজিশন (অবস্থান) রিটার্ন করে।

// => replace() মেথড: এই মেথডটি একটি নির্দিষ্ট প্যাটার্ন খুঁজে বের করে সেটি নতুন স্ট্রিং দ্বারা প্রতিস্থাপন করে এবং সংশোধিত স্ট্রিংটি রিটার্ন করে।

let text = "I love JavaScript!";
let position = text.search(/JavaScript/);
console.log(position); // Output: 7 (যেখানে "JavaScript" শুরু হয়েছে)

let text_2 = "I love JavaScript!";
let newText = text_2.replace(/JavaScript/, "coding");
console.log(newText); // Output: "I love coding!"

let dateTxt = "Today's date is 2024-11-02.";
let datePosition = dateTxt.search(/\d{4}-\d{2}-\d{2}/);
console.log(datePosition); // Output: 16 (যেখানে তারিখ শুরু হয়েছে)

let text_3 = "My  number is 0164-6544-854 and office is 0164-6544-854.";
let newText_3 = text_3.replace(/\d{4}-\d{4}-\d{3}/g, "[hiden number]");
console.log(newText_3); // Output: "My number is [hidden number] and office number is [hidden number]."

let text_4 = "Hello World! Hello My World!";
let text_pattern = /hello/gi;
let result = text_4.match(text_pattern);
console.log(result); //  ans: [ 'Hello', 'Hello' ]

//  JavaScript-এর match() মেথডটি স্ট্রিং থেকে নির্দিষ্ট প্যাটার্ন বা নিয়ম অনুসারে ডেটা খুঁজে বের করতে ব্যবহৃত হয়। এটি সাধারণত রেগুলার এক্সপ্রেশন (Regular Expressions) ব্যবহার করে খোঁজার কাজটি করে। match() মেথডটি স্ট্রিং-এর একটি মেথড, এবং এটি একটি অ্যারে (array) বা null রিটার্ন করে।
