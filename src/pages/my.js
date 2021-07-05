import './my.scss'

import Header from '../components/shared/header'
import UserProfile from '../components/my/user-profile'

import { getUser } from '../utils/user'
import { render } from '../utils/render'

class MyPage {
  constructor(props) {
    this.root = document.getElementById('app')
    this.props = props
    this.user = getUser()
    this.children = []

    if (!this.user) {
      this.props.router.push('/signin')
      return
    }

    this.componentUpdate()
  }

  componentUpdate() {
    this.updateChildrenProps()
    this.render()
    this.componentBindEvent()
  }

  updateChildrenProps() {
    this.children = [
      new Header({
        user: this.user,
        router: this.props.router,
      }),
      new UserProfile({
        user: this.user,
        router: this.props.router,
      }),
    ]
  }

  componentBindEvent() {
    this.children.forEach((component) => {
      if (component.componentBindEvent) {
        component.componentBindEvent()
      }
    })
  }

  render() {
    this.root.innerHTML = render(this.children)
  }
}

export default MyPage
