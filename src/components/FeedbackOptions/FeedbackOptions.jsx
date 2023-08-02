import PropTypes from 'prop-types';
import React from "react";
import { Option } from './FeedbackOptions.styled';



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
      {options.map((option) => (
        <Option key={option} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Option>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}