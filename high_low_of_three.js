x = 4
y = 3
z = 100

type = "Largest of all three"

x = (x > y) ? x : y;
x = (x > z) ? x : z;
console.log(type,x);

type = "Smallest of all three"

x = (x < y) ? x : y;
x = (x < z) ? x : z;
console.log(type,x);