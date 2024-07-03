// 1. alloc
let buf_1 = Buffer.alloc(10);
// console.log(buf_1); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10000);
// console.log(buf_2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 3. from
let buf_3 = Buffer.from('hello');
// console.log(buf_3); // <Buffer e4 bd a0 e5 a5 bd e5 95 8a>
let buf_4 = Buffer.from([1, 2, 3, 4]);
console.log(buf_4); // <Buffer 01 02 03 04>