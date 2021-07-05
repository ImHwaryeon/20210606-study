import './story.scss'

class Story {
  constructor(props) {
    this.props = props
  }

  render() {
    if (!this.props.friends.length) {
      return ``
    }

    const components = this.props.friends.reduce((prev, friend) => {
      return `
				${prev}
				<li class="friend">
					<img src="${friend.thumbnail}" alt="유저 이미지" />
					<span>${friend.name}</span>
				</li>
			`
    }, ``)

    return `
			<div class="wrap_story">
				<ul class="wrap_friend">
					${components}
				</ul>
			</div>
		`
  }
}

export default Story
