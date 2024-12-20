// // CJS
// const moduleData = require("./math")
// console.log(moduleData)
// // npm run start 
// // -> { add: [Function: add], sub: [Function: sub] }
// console.log(moduleData.add(1, 2))   // 3
// console.log(moduleData.sub(1, 2))   // -1

// // 구조 분해 할당
// const {add, sub} = require("./math")
// console.log(add(1, 2))   // 3
// console.log(sub(1, 2))   // -1



// EMS
import mul, { add, sub } from "./math.js"
// console.log(add(1, 2))   // 3
// console.log(sub(1, 2))   // -1
// console.log(mul(2, 3))   // 6

import randomColor from "randomcolor"
const color = randomColor()
console.log(color)