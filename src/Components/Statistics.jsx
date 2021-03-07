import PropTypes from 'prop-types'
import { v4 as randomID } from 'uuid';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    const positiveStats = positivePercentage();
    return <ul>
        <li key={randomID()} key>Good:{good}</li>
        <li key={randomID()} >Neutral:{neutral}</li>
        <li key={randomID()} >Bad:{bad}</li>
        <li key={randomID()} >Positive:{positiveStats}%</li>
        <li key={randomID()} >Total:{total()}</li>
    </ul>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}
export default Statistics;