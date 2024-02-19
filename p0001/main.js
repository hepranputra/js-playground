let finalResult; // Must be 48 later
let evenOddResult; // Must be even number

let num1 = 3;
let num2 = 5;
let num3 = 8;
let num4 = 14;

// Since about 48, I think I want 6 & 8 here
let result1 = num1 + num2;
let result2 = num4 - num3;

finalResult = result1 * result2;
evenOddResult = finalResult % 2;

// Select section element in my HTML
const section = document.querySelector("section")
section.innertHTML = " ";

// Create 2 paragraphs and so on.
const para1 = document.createElement("p");
const finalResultCheck = finalResult === 48 ? 
  `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;

const para2 = document.createElement("p");
const evenOddResultCheck = evenOddResult === 0 ? 
  "The final result is even!" : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;

// Add into the HTML
section.appendChild(para1);
section.appendChild(para2);
