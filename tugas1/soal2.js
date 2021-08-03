const arr = [90, 102, 1231, 3112, 801, 812];

var a = arr[90];
var b = arr[102];
var c = arr[801];
var d = arr[812];
var e = arr[1231];
var f = arr[3112];

var [a, b, c, d, e, f] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

const arr2 = [90, 102, 1231, 3112, 801, 812];
var [a, b, ...rest] = arr2;
console.log(a); 
console.log(b); 
console.log(rest);