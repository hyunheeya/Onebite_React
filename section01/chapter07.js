// 1. 대입 연산자
let var1 = 1


// 2. 산술 연산자
let num1 = 3 + 2
let num2 = 3 - 2
let num3 = 3 * 2
let num4 = 3 / 2
let num5 = 3 % 2

let num6 = 1 + 2 * 10
// console.log(num6)


// 3. 복합 대입 연산자
// 복합 -> 대입 + 산술
let num7 = 10
num7 += 20
num7 -= 20
num7 *= 20
num7 /= 20
num7 %= 20
// console.log(num7)


// 4. 증감 연산자
// 값을 1씩 늘리거나 줄일 떄 사용
let num8 = 10
// console.log(++num8) // 전위 연산; 이 라인에서 즉시 증감연산이 이루어짐
// console.log(num8++) // 후위 연산


// 5. 논리 연산자
let or = true || false
let and = true && false
let not = !true

// console.log(or, and, not)


// 6. 비교 연산자
let com1 = 1 === 2 // == -> 자료형이 같은지는 비교 안됨 -> 자료형이 달라도 true라고 나옴 => === 3번 사용
let com2 = 1 !== 2
// console.log(com1, com2)

let comp3 = 2 > 1
let comp4 = 2 < 1
// console.log(comp3, comp4)

let comp5 = 2 >= 2
let comp6 = 2 <= 2
// console.log(comp5, comp6)