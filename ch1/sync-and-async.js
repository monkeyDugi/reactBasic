// const fs = require('fs')

// // 동기적으로 파일 읽기
// const dataSync = fs.readFileSync('test.txt', 'utf-8')
// console.log(dataSync)

// // 비동기 파일 익명 함수로 읽기 
// fs.readFile('test.txt', 'utf-8', function (err, data) { 
//   console.log(data)
// })

// // 화살표로 익명함수 대체
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//   console.log(data)
// })



// setTimeout을 이용한 동기와 비동기 체험

// 동기적 실행(순차적 실행)
function fakeSetTimeout(callback, delay) {
  callback()

}

console.log(0)

// fakeSetTimeout(function () {
//   console.log('hello')
// }, 0)

// 비동기 실행
// 1. webAPI로서 비동기 함수로 만들어졌다.
// 2. 바로 stack 영역으로 들어가지 않는다. setTimeout()을 stack에서 정의만 하고 브라우저에서 실행을 하고, stack Q 영역에 저장하고 stack 영역이 완전 비어질 때 까지 대기한다.
// 3. 대기 중 이미 stack 영역에 console.log(1)이 들어가 실행되고 있기 때문에 이후에 console.log('hello')가 실행된다.
// 4. stack 영역이 함수가 실행되는 곳 이다.
setTimeout(function () {
  console.log('hello')
})

console.log(1)

// 실제 setTimeout 함수는 비동기이다
