const fs = require('fs')

// 동기적으로 파일 읽기
const dataSync = fs.readFileSync('test.txt', 'utf-8')
console.log(dataSync)

// 비동기 파일 익명 함수로 읽기
fs.readFile('test.txt', 'utf-8', function (err, data) { 
  console.log(data)
})

// 화살표로 익명함수 대체
fs.readFile('test.txt', 'utf-8', (err, data) => {
  console.log(data)
})

