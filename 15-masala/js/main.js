//boolean 15
let abc = 505;

c = abc % 10;
b = Math.trunc((abc % 100) / 10);
a = Math.trunc(abc / 100);

res = a == c;

console.log(res);
