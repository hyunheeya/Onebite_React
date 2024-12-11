// 1. 함수 표현식
function funcA () {
    // console.log("funcA")
}

// 함수 자체를 변수에 담기
let varA = funcA

// console.log(varA)
// ƒ funcA () {
//     console.log("funcA")
// }

// varA()  // funcA

let varB = function funcB() {   // 선언식이 아님, 값으로써 함수가 생성된 것임 -> 함수의 이름으로 호출 불가 -> 함수의 이름으로 못 부름 -> 함수 이름 생략 -> 이름이 없는 함수: 익명 함수
    // console.log("funcB")
}

varB()  // funcB

// 함수 선언문을 이용해서 함수를 만들지 않고 대신 값으로써 함수를 생성하는 방식을 자바스크립트에서 함수 표현식이라고 부름
// 함수 표현식으로 만든 함수들은 값으로써 취급이 되기 때문에 호이스팅이 되는 함수 선언문으로 만든 함수와 달리 함수 표현식으로 만든 함수들은 호이스팅의 대상이 되지 않는다.




// 2. 화살표 함수
let varC = () => {
    return 1
}

console.log(varC()) // 1

// 값을 반환하기만 하는 함수일 때, 중괄호와 return 문을 지워도 됨
let varD = () => 2

console.log(varD()) // 2

// 매개변수가 필요하면 소괄호 안에 매개변수를 선언해주면 됨
let varE = (value) => value + 1

console.log(varE(10)) // 11
