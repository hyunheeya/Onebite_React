// 함수 
// 직사각형 넓이를 구하는 함수


// 고정된 값
// function getArea () {
//     let width = 10
//     let height = 20
//     let area = width * height

//     console.log(area)
// }

// getArea()

// 동적으로, 함수를 호출할 때마다 우리가 이 함수에 넘겨준 값을 통해서 넓이를 구하기
// function getArea (width, height) {
//     let area = width * height

//     console.log(area)
// }

// getArea(10, 20)     // 200
// getArea(30, 20)     // 600
// getArea(120, 200)   // 24000

// 함수 안에 함수 선언
function getArea (width, height) {
    function another () {
        console.log("another")
    }

    another()
    let area = width * height

    return area
}

let area1 = getArea(10, 20) 