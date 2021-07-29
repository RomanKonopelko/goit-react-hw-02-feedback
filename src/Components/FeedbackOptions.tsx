import React from 'react'
import { v4 as randomID } from 'uuid';

interface Props {
    options: string[],
    onLeaveFeedback(e:React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: Props) => {

    return <>{options.map(option => {
        return <button key={randomID()} type="button" className="button" name={option.toLowerCase()} onClick={e => { onLeaveFeedback(e) }}> {option}</button >
    })}</>
}

export default FeedbackOptions