import Header from '../components/shared/header'

class MainPage {
  constructor() {
    this.root = document.getElementById('app')
    this.user = JSON.parse(window.localStorage.getItem('user') || null)

    this.children = [] //페이지 내부에서 그릴 컴포넌트

    this.initialize() //1
  }

  initialize() {
    // 비동기 값

    this.componentUpdate() //2
  }

  componentUpdate() {
    this.updateChildrenProps() //3
    this.render() //4
    this.componentBindEvent() //5
  }

  updateChildrenProps() {
    this.children = [
      new Header({
        user: this.user,
      }),
    ]
  }

  componentBindEvent() {}

  render() {
    this.root.innerHTML = this.children.reduce((prev, component) => {
      return `
        ${prev}
        ${component.render()}
      `
    }, ``)
  }
}

export default MainPage
