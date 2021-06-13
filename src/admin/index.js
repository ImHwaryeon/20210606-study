import User from './user'

/**
 * 1. 유저를 추가 (push)
 * 2. 유저를 삭제 ()
 * 3. 유저 이름 변경 (map)
 * 4. 모든 유저가 40대 이하인지 (every)
 */

class AdminSystem {
  constructor() {
    this.users = []
  }
  addUser({ name, age }) {
    this.users = [...this.users, new User(name, age)]
  }
  deleteUser(name) {
    this.users = this.users.filter((user) => user.name !== name)
  }
  updateUserName(name, newName) {
    this.users = this.users.map((user) => {
      return user.name === name ? user.updateName(newName) : user
    })
  }
  isUnder40() {
    return this.users.every((user) => user.age < 40)
  }
}

export default AdminSystem