// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
}

// animal = { a: 1}    // 오류

animal.age = 2  // 추가
animal.name = "까망이"  // 수정
delete animal.color    // 삭제



// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "이정환",
    // 메서드
    // sayHi: function () {
    //     console.log("안녕!")
    // }

    // 화살표 함수
    // sayHi: () => {
    //     console.log("안녕!")
    // }

    // 메서드 선언 -> 화살표 함수보다 더 단축된 형태
    sayHi() {
        console.log("안녕!")
    }
}

person.sayHi()      // 안녕!
person["sayHi"]()   // 안녕!