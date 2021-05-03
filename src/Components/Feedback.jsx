import { useState } from 'react'
import Statistics from './Statistics'
import Section from './Section'
import FeedbackOption from './FeedbackOptions'

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (e) => {
    const { name } = e.target
    switch (name) {
      case 'good': setGood(good + 1)
        break;
      case 'neutral': setNeutral(neutral + 1)
        break;
      case 'bad': setBad(bad + 1)
        break;
      default:
        return
    }
  }

  const countTotalFeedback = () => {

    return Object.values({ good, neutral, bad }).reduce((acc, val) => {
      return acc + val;
    }, 0)
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    const percentage = Math.round(good / total * 100)
    return isNaN(percentage) ? 0 : percentage;
  }

  const options = ['Good', 'Neutral', 'Bad']

  return (

    <div>
      <Section title="Leave your feedback"><FeedbackOption options={options} onLeaveFeedback={addFeedback} /></Section >
      <Section title='Statistics'>{countTotalFeedback() === 0 ? 'There is no feedback yet' : <Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage} />}</Section >
    </div>
  )
}