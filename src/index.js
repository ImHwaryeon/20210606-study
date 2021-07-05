import Router from './components/router'

import MainPage from './pages/main'
import SigninPage from './pages/signin'
import ErrorPage from './pages/error'
import MyPage from './pages/my'

import './scss/reset.scss'

const ROUTES = {
  '/': MainPage,
  '/signin': SigninPage,
  '/error': ErrorPage,
  '/my': MyPage,
}

// 컴포넌트들의 루트
class App {
  constructor() {
    this.router = new Router(ROUTES)
  }
}

new App()
