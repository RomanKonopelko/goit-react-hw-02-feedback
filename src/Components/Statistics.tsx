import { v4 as randomID } from 'uuid';

interface Props {
    good: number,
    neutral: number,
    bad: number,
    total(): number,
    positivePercentage(): number
}
const Statistics = ({ good, neutral, bad, total, positivePercentage }:Props) => {
    const positiveStats = positivePercentage();
    return <ul>
        <li key={randomID()} >Good:{good}</li>
        <li key={randomID()} >Neutral:{neutral}</li>
        <li key={randomID()} >Bad:{bad}</li>
        <li key={randomID()} >Positive:{positiveStats}%</li>
        <li key={randomID()} >Total:{total()}</li>
    </ul>
}

export default Statistics;