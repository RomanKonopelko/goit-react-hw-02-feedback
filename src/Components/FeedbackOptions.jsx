const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return options.map(option => {
        return <button type="button" className="button" value={option.toLowerCase()} onClick={e => { onLeaveFeedback(e) }}> {option}</button >
    })
}

export default FeedbackOptions