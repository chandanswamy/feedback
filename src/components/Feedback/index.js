// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isTrue: true}

  clickOnFeedbackIcon = () => {
    this.setState({isTrue: false})
  }

  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {isTrue && (
          <div className="feed-back-card">
            <h1 className="feed-back-card-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-items-container">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id} className="list-item">
                  <button
                    onClick={this.clickOnFeedbackIcon}
                    className="button"
                    type="button"
                  >
                    <img
                      className="feed-back-image"
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                    />
                  </button>

                  <p className="feed-back-desc">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!isTrue && (
          <div className="feed-back-card">
            <img
              className="feed-back-image"
              src={loveEmojiUrl}
              alt="love emoji"
            />
            <h1 className="feed-back-card-heading">Thank You!</h1>
            <p className="feed-back-desc">
              We will you use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
