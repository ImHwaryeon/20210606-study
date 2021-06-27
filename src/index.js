import Router from './components/router'

import MainPage from './pages/main'
import SigninPage from './pages/signin'
import ErrorPage from './pages/error'

import './scss/reset.scss'

const ROUTES = {
  '/': MainPage,
  '/signin': SigninPage,
  '/error': ErrorPage,
}

// 컴포넌트들의 루트
class App {
  constructor() {
    this.router = new Router(ROUTES)
  }
}

new App()
