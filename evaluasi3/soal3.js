var kodeUnix = [23, 89,67,29,192,6,2,129,21,872,891,901,70,61,78,62,32,90,90];
let codes = kodeUnix.map(a => a - 50 + kodeUnix.length)
.filter(a => a < 20)
.reduce((acc, cur) => acc + cur);
console.log(codes);