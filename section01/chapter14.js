// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1   // 전역 스코프

function funcA () {
    let b = 2   // 지역 스코프
    console.log(a)

    function funcB () {

    }
}

funcA() 
// console.log(b)  // 오류 - 외부(중괄호 바깥)에서 접근


if (true) {
    let c = 1   // 지역 스코프
}
// console.log(c)  // 오류

for (let i = 0; i < 10; i++) {
    let d = 1   // 지역 스코프
}
// console.log(d)  // 오류
// console.log(i)  // 오류
// funcB() // 오류