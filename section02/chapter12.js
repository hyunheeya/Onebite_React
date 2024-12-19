function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b   // 3
        callback(sum)
    }, 3000);
}

add(1, 2, (value) => {      // 3초 후 인수로 전달한 콜백 함수 실행
    console.log(value)
})


// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이"
        callback(food)
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`
        callback(cooldownedFood)
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`
        callback(freezedFood)
    }, 1500);
}

orderFood((food) => {
    console.log(food)   // 3초 뒤 출력

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood)   // 5초 뒤 출력

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood)    // 6.5초 뒤 출력
        })
    })
}) 