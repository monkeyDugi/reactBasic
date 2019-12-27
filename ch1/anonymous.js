// 소문자 대문자로 변환
const s = 'I want to finish the book with React and Spring Boot and do the Toy project.'
const r = s.replace(/[a-z]+/g, (m) => {
  return m.toUpperCase()
})
console.log(r)

// 배열의 숫자로 정렬 
const array = [100, 1, 20, 43, 30, 11, 4]
array.sort((a, b) => { return a - b })
console.log(array)