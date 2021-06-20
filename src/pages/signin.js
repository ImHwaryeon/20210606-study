import ''

class SigninPage {
  constructor() {
    this.root = document.getElementById('app')

    this.componentUpdate()
  }

  // 값이 업데이트가되면 동작하는 함수
  // => 이벤트를 달아주고, 다시 렌더링을 시킨다.
  componentUpdate() {
    this.render()
    this.bindEvent() // 주의 ! render 후에 이벤트 바인딩
  }

  bindEvent() {
    const emailEl = this.querySelector('#email')
    const passwordEl = this.querySelector('#password')

    this.root.querySelector('.btn_submit').addEventListener('click', () => {})
  }

  render() {
    this.root.innerHTML = `
			<div class="wrap_signin">
				<input id="email" placeholder="이메일을 입력해주세요" />
				<input id="password" type="password" placeholder="비밀번호를 입력해주세요" />

				<button class="btn_submit"></button>
			</div>

		`
  }
}

export default SigninPage
