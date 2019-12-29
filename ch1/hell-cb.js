// 콜백 지옥
const fs = require('fs')
// a.txt 읽기
fs.readFile('a.txt', 'utf-8', function (err, data) {
  console.log('a.txt.를 읽었습니다.', data)
  //b.txt. 읽기
  fs.readFile('b.txt', 'utf-8', function (err, data) {
    console.log('b.txt.를 읽었습니다.', data)
    //c.txt. 읽기
    fs.readFile('c.txt', 'utf-8', function (err, data) {
      console.log('c.txt.를 읽었습니다.', data)
    })            
  })    
})
    
    // 1.seTimeout은 API로 비동기 처리를 하기 때문에 callstack 보다 stack Q로 먼저 간다.
    // 2.console.log 실행하지 않고 밑에 다른 delay함수를 stack영역에 각각 순차 적으로 실행하고 stack Q로 넘기고 stack에서 delay함수를 제거
    // 3.stack영역에 delay함수가 없으면 텅 비었기 때문에 그 때 event loop가 stack Q에서 하나씩 순차적으로 console.log를 실행하기 때문에 거의 동시에 이루지기 때문에 모두 같은 시간이 출력된다.
function delay (sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString())
  }, sec * 1000)
}
    
// delay(1, (result) => {
//   console.log(1, result)
// })

// delay(1, (result) => {
//   console.log(2, result)
// })

// delay(1, (result) => {
//   console.log(3, result)
// })

// 위의 내용을 해결하기 위해 콜백 지옥을 사용
// 1. 1초마다 실행이 가능하지만 알아보기 힘든 코드가 된다.
// delay(1, (result) => {
//   console.log(1, result)

//   delay(1, (result) => {
//     console.log(2, result)
    
//     delay(1, (result) => {
//       console.log(3, result)
//     })
//   })
// })

// 콜백 지옥을 해결하기 위한 promise
function delayP (sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString())
    }, sec * 1000)
  })
}

// delayP(1).then((result) => {
//   console.log(1, result)
//   return delayP(1)
// }).then((result) => {
//   console.log(2, result)
//   return delayP(1)
// }).then((result) => {
//   console.log(3, result)  
// })

// async/await을 이용한 callback 지옥 해결
async function delayAsync () {
  const a = await delayP(1)
  console.log(1, a)
  const b = await delayP(1)
  console.log(2, b)
  const c = await delayP(1)
  console.log(3, c)
}
delayAsync();