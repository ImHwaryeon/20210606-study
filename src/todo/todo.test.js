import Todo from '.'

describe('<TODO>', () => {
  describe('추가', () => {
    it('TODO 아이템을 추가하면 아이템 갯수가 1개가된다.', () => {
      const todoManager = new Todo()

      todoManager.addTodo('밥먹기')

      expect(todoManager.todos.length).toBe(1)
    })
    it('직전에 추가한 아이템이 맨앞으로 추가된다', () => {
      const todoManager = new Todo()

      todoManager.addTodo('밥먹기')
      todoManager.addTodo('공부하기')

      expect(todoManager.todos[0].title).toEqual('공부하기')
    })
  })
  describe('업데이트', () => {
    it('완료되지 않은 TODO 의 상태가 완료 상태로 변경된다.', () => {
      const todoManager = new Todo()

      todoManager.addTodo('밥먹기')

      expect(todoManager.todos[0].isDone).toBe(false)

      todoManager.updateDone(todoManager.todos[0].id)

      expect(todoManager.todos[0].isDone).toBe(true)
    })
    it('TODO 의 텍스트가 수정된 텍스트로 노출된다.', () => {
      // 복습
    })
  })
  describe('삭제', () => {
    it('특정 ID 를 가진 TODO 를 삭제 할 수 있다.', () => {
      // 복습
      const todoManager = new Todo()

      todoManager.addTodo('밥먹기')

      expect(todoManager.todos.length).toBe(1)
    })
  })
  describe('필터', () => {
    // 복습
    it('모든 아이템이 완료되지 않았다면 active와 아이템의 숫자가 같다', () => {})
    it('2개의 아이템이 완료되고, 1개의 아이템이 완료되지 않았다면 active 1, completed 2개이다.', () => {})
    it('모든 아이템이 완료됐다면 completed 와 아이템의 숫자가 같다', () => {})
  })
})
