// 1. Date 객체를 생성하는 방법
let date1 = new Date()  // 생성자
console.log(date1)  // Thu Dec 19 2024 01:31:53 GMT+0900 (한국 표준시)

let date2 = new Date("1997-01-07")
console.log(date2)  // Tue Jan 07 1997 09:00:00 GMT+0900 (한국 표준시)

let date2_time = new Date("1997/01/07/10:10:10")
console.log(date2_time) // Tue Jan 07 1997 10:10:10 GMT+0900 (한국 표준시)

let date2_number = new Date(1997, 1, 7, 23, 59, 59)
console.log(date2_number)   // Fri Feb 07 1997 23:59:59 GMT+0900 (한국 표준시)


// 2. 타임 스탬프
// 특정 시간이 “1970.01.01 00시 00분 00초”로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime()
console.log(ts1)

let date3 = new Date(ts1)
console.log(date1, date3)   // Thu Dec 19 2024 01:49:38 GMT+0900 (한국 표준시) Thu Dec 19 2024 01:49:38 GMT+0900 (한국 표준시)


// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear()
let month = date1.getMonth() + 1    // js의 월은 0부터 시작하기 때문
let date = date1.getDate()

let hour = date1.getHours()
let minute = date1.getMinutes()
let seconds = date1.getSeconds()

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
)
/*
2024 12 19 1 57 15
*/


// 4. 시간 수정하기
date1.setFullYear(2023)
date1.setMonth(2)
date1.setDate(30)
date1.setHours(23)
date1.setMinutes(59)
date1.setSeconds(59)

console.log(date1)    // Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시)


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString())     // Thu Mar 30 2023
console.log(date1.toLocaleString())   // 2023. 3. 30. 오후 11:59:59