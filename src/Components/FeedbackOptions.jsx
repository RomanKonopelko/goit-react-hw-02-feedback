import PropTypes from "prop-types";
import { v4 as randomID } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return options.map(option => {
        return <button key={randomID()} type="button" className="button" name={option.toLowerCase()} onClick={e => { onLeaveFeedback(e) }}> {option}</button >
    })
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions