// 호이스팅
// 변수 호이스팅, 함수 호이스팅

/**
 * 변수 호이스팅
 */
console.log(name); // undefined => let, const = Error

var name = ''

// 실행단계 => 변수를 맨위로, 그다음 콘솔로그, 그다음 값 할당
var name;
console.log(name); // undefined
name = ''

// const, let => 미리 문제를 알수있어서 에러 처리가 빠름

console.log(age);

let age = 20 // TDZ

let age;
console.log(age);
age = 20

// =====> 먼저 선언을 하고 선언부 아래에서 사용하자!

// 스코프 자바스크립트 스코프는 => 함수 스코프

let a = 10 // 글로벌하게 사용하는것은 쓰지말자

function foo () {
	//스코프
	function inner () {
		//inner 스코프
	}
}
//=> 안에서 밖은 볼수있지만 밖에서 안은 볼수없음 이게 스코프의 핵심!