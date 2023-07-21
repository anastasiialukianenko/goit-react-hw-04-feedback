import PropTypes from 'prop-types';
import React from "react";
import { Option } from './FeedbackOptions.styled';



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsName = Object.keys(options);
    return (
    <div>
      {optionsName.map((option) => (
        <Option key={option} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </Option>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
}