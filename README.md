
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1. getElementById: Grabs only one item using its unique ID.
2. getElementsByClassName: Grabs all items with the same class name as a list.
3. querySelector: Grabs only the first item it finds (works for ID or Class).
4. querySelectorAll: Grabs every matching item and puts them in a list.

### 2. How do you create and insert a new element into the DOM?
1. const el = document.createElement('div'); (নতুন এলিমেন্ট বানানো) //Create
2. el.innerText = 'Hello'; (ভেতরে লেখা বা ক্লাস বসানো) //Style
3. parent.appendChild(el); (প্যারেন্ট এলিমেন্টের ভেতরে ঢুকিয়ে দেওয়া) //Insert

### 3. What is Event Bubbling? And how does it work?

1. What it is: যখন কোনো এলিমেন্টে ক্লিক করো, সেই ক্লিকটা ওপরের প্যারেন্টদের কাছেও চলে যায়।
2. How it works: প্রথমে Child এর ইভেন্ট কাজ করে, তারপর তার Parent এর ইভেন্ট কাজ করে।
3. How to stop: এই বাবলিং বন্ধ করতে চাইলে event.stopPropagation() ব্যবহার করতে হয়।

### 4. What is Event Delegation in JavaScript? Why is it useful?
ইভেন্ট ডেলিগেশন হলো প্রতিটি এলিমেন্টে আলাদা ইভেন্ট লিসেনার না বসিয়ে শুধু তাদের প্যারেন্ট এলিমেন্টে একটি লিসেনার বসানোর সিস্টেম। এটি মূলত ইভেন্ট বাবলিংয়ের ওপর ভিত্তি করে কাজ করে, কারণ চাইল্ড এলিমেন্টে ক্লিক করলে সেই ক্লিকটি বাবল হয়ে ওপরের প্যারেন্টের কাছে যায় এবং প্যারেন্ট একাই সব চাইল্ডের ক্লিক সামলাতে পারে। এর সবচেয়ে বড় সুবিধা হলো এটি মেমোরি বাঁচায় এবং পরে নতুন কোনো এলিমেন্ট অ্যাড করলেও সেটি আলাদা লজিক ছাড়াই অটো কাজ করে।

### 5. What is the difference between preventDefault() and stopPropagation() methods?
1.preventDefault() মূলত ব্রাউজারের কোনো এলিমেন্টের ডিফল্ট কাজ বন্ধ করে দেয়। যেমন—একটি লিঙ্কে ক্লিক করলে সেটি অন্য পেজে চলে যায় বা একটি ফর্ম সাবমিট করলে পেজ রিলোড হয়; preventDefault() ব্যবহার করলে এই কাজগুলো আর হবে না, কিন্তু ইভেন্টটি বাবলিং হয়ে ওপরের দিকে যেতে থাকবে।

2. stopPropagation() ব্যবহার করা হয় ইভেন্ট বাবলিং থামানোর জন্য। এটি কোনো এলিমেন্টের ডিফল্ট কাজ বন্ধ করে না, বরং ওই এলিমেন্টে ক্লিক করার খবর যেন তার প্যারেন্ট বা ওপরের এলিমেন্টগুলো জানতে না পারে, সেটি নিশ্চিত করে। অর্থাৎ, ক্লিকটি শুধু ওই নির্দিষ্ট এলিমেন্টেই সীমাবদ্ধ থাকে।