var foo = ''
var foo2 = 10
var foo3 = true
var foo4 = {}
var foo5 = function() {}

foo5 = {}
foo3 = 100
// => var는 값을 따라가는 행위자체가 힘들다, 값의 재할당이  - 전역 스코프

// ES6 let, const { } - 블록 스코프
/**
 * 
 */
let f1 = 'f1'
let f2 = 20 

f1 = 20

// 요즘엔 const만 기반으로 사용한다 - 상수
// 변수이기때문에 어떤값이든 받을수 있지만
// 값의 재할당이 불가능함 - 변화x