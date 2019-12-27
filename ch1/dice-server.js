// http 모듈 읽기
const http = require('http')
const ctype = { 'Content-Type': 'text/html;charset=utf-8' }

// 웹 서버 실행
const svr = http.createServer(handler) // 서버 생성
svr.listen(8081) // 8081 포트 사용

// 서버에 접근이 있을 때 처리 
function handler (req, res) {
  // URL 구분
  const url = req.url
  // 최상위 페이지 일 때
  if (url === '/' || url === '/index.html') {
    showIndexPage(req, res)
    return
  }
  // 주사위 페이지 일 때
  if (url.substr(0, 6) === '/dice/') {
    showDicePage(req, res)
    return
  }
  // 기타의 경우
  res.writeHead(404, ctype)
  res.end('404 not found')
}

// index.html 페이지에 접근 시
function showIndexPage (req, res) {
  // HTTP 헤더정보 출력
  res.writeHead(200, ctype)
  // 응답 본문 출력
  const html = '<h1>주사위 페이지 안내</h1>\n' +
    '<p><a href="/dice/6">6면체 주사위</a></p>' +
    '<p><a href="/dice/12">12면체 주사위</a></p>'
  res.end(html)
}

// 주사위 페이지에 접근 시
function showDicePage (req, res) {
  // HTTP 헤더를 출력
  res.writeHead(200, ctype)
  // 몇 면체 주사위가 필요한지 확인
  const a = req.url.split('/')
  const num = parseInt(a[2])
  // 임의의 숫자 생성
  const rnd = Math.floor(Math.random() * num) + 1
  // 응답 본문 출력
  res.end('<p style="font-size:72px;">' + rnd + '</p>')
}
