function returnFalse() {
    console.log("False 함수")
    // return false
    return undefined
}

function returnTrue() {
    console.log("True 함수")
    return true
}

console.log(returnFalse() && returnTrue())  
// False 함수
// undefined
// -> returnTrue 함수 호출 X -> 단락 평가 작동



// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name
    console.log(name || "person의 값이 없음")
}

printName()     // person의 값이 없음
printName({ name: "이정환" })    // 이정환