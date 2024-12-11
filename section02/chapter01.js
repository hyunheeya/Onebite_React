// 1. Falsy 한 값
// 조건문에서 거짓으로 평가됨
let f1 = undefined
let f2 = null
let f3 = 0
let f4 = -0
let f5 = NaN
let f6 = ""
let f7 = 0n // big integer라는 특수한 자료형에 해당하는 값, 아주아주 큰 숫자를 저장하는데 사용되는 값, 보통 웹 개발 중에는 잘 이용하지 않음

// if (!f1) {
//     console.log("falsy")    // falsy
// }


// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello"
let t2 = 123
let t3 = []
let t4 = {}
let t5 = () => {}

// if (t4) {
//     console.log("Truthy")   // Truthy
// }



// 3. 활용 사례
function printName(person) {
    if (!person) {
        console.log("person의 값이 없음")
        return
    }
    console.log(person.name)
}

let person = null
let person2 = {name: "이정환"}
printName(person)   // person의 값이 없음
printName(person2)   // 이정환