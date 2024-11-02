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

let text_3 = "My  number is 0164-6544-854 and office is 9587457521.";
let newText_3 = text_3.replace(/\d{4}-\d{4}-\d{3}/g, "[hiden number]");
console.log(newText_3); // Output: "My number is [hidden number] and office number is [hidden number]."
