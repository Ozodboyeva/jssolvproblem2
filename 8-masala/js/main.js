// boolean 8
let a = -4;
let b = -7;
let c = 3;

res =
  (a > 0 && b < 0 && c < 0) ||
  (a < 0 && b > 0 && c < 0) ||
  (a < 0 && b < 0 && c > 0);
console.log(res);
