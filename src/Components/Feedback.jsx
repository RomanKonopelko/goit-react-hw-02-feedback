import { Component } from 'react'
import Statistics from './Statistics'
import Section from './Section'
import FeedbackOption from './FeedbackOptions'
export default class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
    this.options = ['Good', 'Neutral', 'Bad']
    this.addFeedback = this.addFeedback.bind(this)
    this.countTotalFeedback = this.countTotalFeedback.bind(this)
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this)
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

  countTotalFeedback() {
    const values = Object.values(this.state).reduce((acc, val) => {
      return acc + val;
    }, 0)
    return values;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback()
    const percentage = Math.round(this.state.good / total * 100)
    return isNaN(percentage) ? 0 : percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this
    return (<div>
      <Section title="Leave your feedback"><FeedbackOption options={this.options} onLeaveFeedback={this.addFeedback} /></Section >
      <Section title='Statistics'><Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage} /></Section >
    </div>)
  }
}