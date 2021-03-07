import { Component } from 'react'
import Statistics from './Statistics'
import Section from './Section'
import FeedbackOption from './FeedbackOptions'

export default class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = (e) => {
    const { name } = e.target

    this.setState({ [name]: this.state[name] + 1 })
  }

  countTotalFeedback = () => {

    return Object.values(this.state).reduce((acc, val) => {
      return acc + val;
    }, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    const percentage = Math.round(this.state.good / total * 100)
    return isNaN(percentage) ? 0 : percentage;
  }

  render() {
    const options = ['Good', 'Neutral', 'Bad']
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage, addFeedback } = this
    return (<div>
      <Section title="Leave your feedback"><FeedbackOption options={options} onLeaveFeedback={addFeedback} /></Section >
      <Section title='Statistics'>{this.countTotalFeedback() === 0 ? 'There is no feedback yet' : <Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage} />}</Section >
    </div>)
  }
}