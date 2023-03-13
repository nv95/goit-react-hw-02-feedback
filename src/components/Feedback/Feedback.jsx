import { Component } from 'react';
import {
  FeedbackContainer,
  FeedbackTitle,
  FeedbackButtons,
  FeedbackBut,
} from './Feedback.styled';
import PropTypes from 'prop-types';

class Feedback extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <FeedbackContainer>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <FeedbackButtons>
          {this.props.options.map(btn => (
            <FeedbackBut
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </FeedbackBut>
          ))}
        </FeedbackButtons>
      </FeedbackContainer>
    );
  }
}

export default Feedback;
