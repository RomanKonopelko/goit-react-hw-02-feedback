import react, { Component } from 'react'

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback(e) {
    const { value } = e.currentTarget

    this.setState(prevState => {
      return {
        ...prevState,
        [value]: prevState[value] += 1
      }
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (<div>
      <h2>Leave your feedback</h2>
      <button type="button" className="button" value='good' onClick={e => {
        this.addFeedback(e)
      }}>Good</button>
      <button type="button" className="button" value='neutral' onClick={e => {
        this.addFeedback(e)
      }}>Neutral</button>
      <button type="button" className="button" value='bad' onClick={e => {
        this.addFeedback(e)
      }}>Bad</button>
      <h3>Statistics</h3>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>
    </div>)
  }
}