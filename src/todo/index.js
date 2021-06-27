import { v4 as uuidv4 } from 'uuid'

/**
 * [TODO]
 * {
 *   id: string, 고유 아이디
 *   title: string 텍스트
 *   isDone: boolean 완료
 * }
 */
class Todo {
  constructor() {
    this.todos = [] // TODO 아이템 배열
  }

  addTodo(title) {
    const newTodo = { id: uuidv4(), title, isDone: false }
    this.todos = [newTodo, ...this.todos]
  }

  updateDone(id) {
    this.todos = this.todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    })
  }

  filter(type) {
    switch (type) {
      case 'ALL': {
        return this.todos.length
      }
      case 'ACTIVE': {
        // isDone false => filter
        return this.todos.filter((todo) => !todo.isDone).length
      }
      case 'COMPLETED': {
        // isDone true => filter
        return this.todos.filter((todo) => todo.isDone).length
      }
      default: {
        throw new Error('정의되지 않은 타입입니다')
      }
    }
  }
}

export default Todo
