import './signin.scss'

class SigninPage {
  constructor(props) {
    console.log(props)
    this.root = document.getElementById('app')
    this.props = props

    this.componentUpdate()
  }

  // 값이 업데이트가되면 동작하는 함수
  // => 이벤트를 달아주고, 다시 렌더링을 시킨다.
  componentUpdate() {
    this.render()
    this.bindEvent() // 주의 ! render 후에 이벤트 바인딩
  }

  bindEvent() {
    const emailEl = this.root.querySelector('#email')
    const passwordEl = this.root.querySelector('#password')

    this.root
      .querySelector('.btn_submit')
      .addEventListener('click', async () => {
        // email 형식이 아니거나
        // 비밀번호가 몇자 아래거나
        if (!emailEl.value || !passwordEl.value) {
          window.alert('필수정보를 입력주세요')
          return
        }
        // 유저 정보를 가져온다.
        // 입력받은 정보와 유저의 정보를 비교한다.
        // 맞다면 로그인처리를 시킨다.
        // jquery = ajax, fetch, axios
        // GET = 받아올때, POST =우리가 서버로 데이터를 보낼때, DELETE = 삭제, PUT = 업데이트
        // default = GET

        const response = await fetch('http://localhost:3333/users')

        if (response.ok) {
          // 응답값에서 실제 사용할 데이터로 변환하는 작업
          const users = await response.json()

          // 받아온 유저 목록이랑 비교를해서 같은 이메일을 가진 애가 있는지
          const user = users.find((user) => user.email === emailEl.value)

          if (!user) {
            window.alert('입력하신 정보를 다시 확인해주세요')
            return
          }
          // 아래는 무조건 유저가 있다.
          // 비밀번호를 체크한다.
          if (user.password !== passwordEl.value) {
            window.alert('입력하신 정보를 다시 확인해주세요')
            return
          }

          window.localStorage.setItem('user', JSON.stringify(user))
          this.props.router.push('/')

          // 로그인성공했으면 메인페이지로 이동한다.
        }
      })
  }

  render() {
    this.root.innerHTML = `
      <div class="wrap_signin">
        <input id="email" placeholder="이메일을 입력해주세요" />
        <input id="password" type="password" placeholder="비밀번호를 입력해주세요"/>
        <button class="btn_submit">로그인</button>
      </div>
    `
  }
}

export default SigninPage
