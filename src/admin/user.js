class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
  updateName(newName) {
    this.name = newName

    return this
  }
}

export default User