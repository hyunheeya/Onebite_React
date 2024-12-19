// // async
// // 어떤 함수를 비동기 함수로 만들어주는 키워드
// // 함수가 promise를 반환하도록 변환해주는 키워드

// // 서버로부터 유저의 데이터를 받아오는 함수
// async function getData() {
//     return {
//         name: "이정환",
//         id: "winterlood",
//     }
// }
// // async -> 객체를 그대로 반환하는 함수가 아니라, 
// // 이 객체를 결과값으로 갖는 새로운 promise를 반환하는 함수로 변환됨

// console.log(getData())  
// /* 
// Promise {<fulfilled>: {…}}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// Object
// */



// async
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood",
            })
        }, 1500);
    })
}

console.log(getData())  


// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData()
    console.log(data)
}

printData()     // {name: '이정환', id: 'winterlood'}