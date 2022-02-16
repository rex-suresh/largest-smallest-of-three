#! /usr/local/bin/node
const num1 = 222
const num2 = 3
const num3 = 100

largest_num = (num1 > num2) ? num1 : num2;
largest_num = (largest_num > num3) ? largest_num : num3;
console.log("Largest of all three",largest_num);

smallest_num = (num1 < num2) ? num1 : num2;
smallest_num = (smallest_num < num3) ? smallest_num : num3;
console.log("Smallest of all three",smallest_num);