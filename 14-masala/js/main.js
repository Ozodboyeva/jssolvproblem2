let abc = 578;

c = abc % 10;
b = Math.trunc((abc % 100) / 10);
a = Math.trunc(abc / 100);

res = (a < b && b < c) || (a > b && b > c);

console.log(res);
