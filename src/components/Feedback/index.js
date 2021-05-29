// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  sendGreet = () => {
    this.setState({feedback: true})
  }

  display = props => {
    const {feedbackData, isDisplayed} = props

    console.log('test', isDisplayed, feedbackData)
    if (!isDisplayed) {
      return (
        <div className="emojiContainer">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emojiListCont">
            {feedbackData.emojis.map(emoji => (
              <li className="liStyle" key={emoji.key}>
                <img
                  className="image"
                  onClick={this.sendGreet}
                  alt="emoji"
                  src={emoji.imageUrl}
                />
                <p>{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return null
  }

  thanksGreet = props => {
    const {feedbackData, isDisplayed} = props
    if (isDisplayed) {
      return (
        <div className="emojiContainer">
          <img alt="heart" src={feedbackData.loveEmojiUrl} />
          <h1>Thank you!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    }
    return null
  }

  render() {
    const {feedbackData} = this.props
    const {feedback} = this.state

    return (
      <div className="bg">
        <this.display feedbackData={feedbackData} isDisplayed={feedback} />
        <this.thanksGreet feedbackData={feedbackData} isDisplayed={feedback} />
      </div>
    )
  }
}

export default Feedback
