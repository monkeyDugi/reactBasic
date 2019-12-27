// http 모듈 읽기
const http = require('http')

// 웹 서버 실행
const svr = http.createServer(handler) // 서버 생성
svr.listen(8081) // 8081 포트 사용

// 서버에 접근이 생기면 처리 
function handler (req, res) {
  console.log('url :', req.url)
  console.log('method :', req.method)

  // HTTP 헤더 출력
  res.writeHead(200, { 'Content-Type': 'text/html' })

  // 응답 본문 출력
  res.end('<h1>Hello, World!</h1>\n')
}
