// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

// console.log(buf_4.toString()); // iloveyou utf-8

// let buf_5 = Buffer.from('hello')
// 此 toString() 和上面的不同，這邊是數字的進制轉換
// console.log(buf_5[0].toString(2)) // 011100100
// console.log(buf_5) // <Buffer 68 65 6c 6c 6f>
// buf_5[0] = 95
// console.log(buf_5) // <Buffer 5f 65 6c 6c 6f>
// console.log(buf_5.toString()) // _ello

// 溢出
// let buf_6 = Buffer.from('hello')
// buf_6[0] = 361 // 361 % 256 = 105 捨棄高位的數字 0001 0110 1001 => 0110 1001
// console.log(buf_6) // <Buffer 69 65 6c 6c 6f>

// 中文
let buf_7 = Buffer.from('你好')
console.log(buf_7) // <Buffer e4 bd a0 e5 a5 bd>