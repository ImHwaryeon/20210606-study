/**
 * []
 * 
 * [10, 'string', true]
 */

/**
 * 1. 배열의 값 추가
 * 
 * push - 원본배열을 회손시켜 요즘엔 사용x
 */
const jops = ['디자이너', '개발자']
// jops.push('기획자')

const newJops = [...jops, '기획자']  // 기존의 값을 복사해와서 기존것과 메모리를 완전 끊어버려야함
// newJops.push('개발자') => push를 안쓰고 ,뒤에 추가해줌

console.log(jops);
console.log(newJops);

/**
 * 값을 추가한다음 서버에 보내야할때
 * 
 * Error!
 * 이전에 추가했던 값을 찾아서 그 값을 원본배열에서 제거하고 다시세팅
 * 
 * 그래서 복사해놓고 에러터지면 버리고 원본쓴다
 * => 복사해와서 복사된애한테 별화를 주자
 * */

/**
 * array.map // 실무에서 많이쓰임
 * 
 * 기존의 배열을 가지고 새로운 배열을 만든다.
 */
const numbers = [1,2,3,4]

const result = numbers.map((n) => { // map은 원본배열을 손상시키지 않고 작업가능
	return n * 2
})

console.log(result);

/**
 * reduce // 실무에서 많이 쓰임
 * 
 * 기존 배열을 가지고 무엇이든 만들 수 있는 함수
 * 
 * 배열의 최고값을 찾고싶으면
 * 
 * 이전의 값보다 지금의 값이 크다면 return
 */
numbers.reduce((prev, currunt) => { 
	//0,1 => 1,2
	return currunt > prev ?currunt : prev
},0)

/**
 * some, every
 * some = ||
 * every = &&
 * 
 * 배열을 베이스로 돌아간다.
 */
numbers.every((n) => {
	return n === 1
})
numbers.some((n) => {
	return n === 1
})

/**
 * filter  // 원본배열을 해치지않고 작업가능
 */
numbers.filter((n) => n!== 1)