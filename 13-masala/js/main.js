// boolean13
let abc = 123;

c = abc % 10;
b = Math.trunc((abc % 100) / 10);
a = Math.trunc(abc / 100);

res = a < b && b < c;

console.log(res);
