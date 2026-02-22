
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: Grabs only one item using its unique ID.
getElementsByClassName: Grabs all items with the same class name as a list.
querySelector: Grabs only the first item it finds (works for ID or Class).
querySelectorAll: Grabs every matching item and puts them in a list.

### 2. How do you create and insert a new element into the DOM?
const el = document.createElement('div'); (নতুন এলিমেন্ট বানানো) //Create
el.innerText = 'Hello'; (ভেতরে লেখা বা ক্লাস বসানো) //Style
parent.appendChild(el); (প্যারেন্ট এলিমেন্টের ভেতরে ঢুকিয়ে দেওয়া) //Insert

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
