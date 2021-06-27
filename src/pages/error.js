class ErrorPage {
  constructor() {
    this.root = document.getElementById('app')

    this.render()
  }

  render() {
    this.root.innerHTML = `
      <div>
        <h1>일시적인 에러가 발생했습니다. 잠시 후 다시 시도해주세요</h1>
      </div>
    `
  }
}

export default ErrorPage
