for (let idx = 1; idx <= 10; idx++) {
    // 짝수일 때 건너뛰기
    if (idx % 2 === 0) {
        continue
    }   
    console.log(idx)

    if (idx >= 5) {
        break
    }
}