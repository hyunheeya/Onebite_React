// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         console.log("안녕")
//         resolve("안녕")
//     }, 2000);
// })

// setTimeout(() => {
//     console.log(promise)    // promise 객체 -> 성공 상태("fulfilled"), 결과값 -> "안녕"
// }, 3000)





// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         console.log("안녕")
//         reject("왜 실패했는지 이유...")
//     }, 2000);
// })

// setTimeout(() => {
//     console.log(promise)    // promise 객체 -> 실패 상태("rejected"), 결과값 -> "왜 실패했는지 이유..."
// }, 3000)




// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const num = null

//         if (typeof num === "number") {
//             resolve(num + 10)
//         } else {
//             reject("num이 숫자가 아닙니다.")
//         }
//     }, 2000);
// })

// // then 메서드
// // -> 그 후에
// promise.then((value) => {
//     console.log(value)
// })

// promise.catch((error) => {
//     console.log(error)  // num이 숫자가 아닙니다.
// })

// promise
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((error) => {
//         console.log(error)  // num이 숫자가 아닙니다.
//     })


function add10(num) {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
    
            if (typeof num === "number") {
                resolve(num + 10)
            } else {
                reject("num이 숫자가 아닙니다.")
            }
        }, 2000);
    })

    return promise
}

add10(0)
  .then((result) => {
    console.log(result)     // 10
    return add10(result)
  })
  .then((result) => {
    console.log(result)     // 20
    return add10(undefined)
  })
  .then((result) => {
    console.log(result)     
  })
  .catch((error) => {
    console.log(error)      // num이 숫자가 아닙니다.
  })