// 피보나치 수를 계산하는 제너레이터 함수 정의
function * genFibonacci () {
  let a = 0
  let b = 1

  while (true) { 
    // [a, b] = [b, a + b]
    a = b
    b = a + b
    // 기존의 while은 무한루프로 계속 돌지만,
    // 제너레이터인 yield를 사용해 루프를 정지하기 때문에
    // 밑에 for 문에서 필요할 때 마다 사용할 수 있게 된다.
    yield a
  }
}

// 제너레이터 객체 추출
const fib = genFibonacci()
for (const num of fib) {
  if (num > 50) break
  console.log(num)
}
