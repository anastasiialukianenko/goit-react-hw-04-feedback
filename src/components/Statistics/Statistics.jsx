import PropTypes from 'prop-types';
import React from "react";
import {StatisticList} from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total = 0, positivePercentage = 0}) => (
    <div>
        <StatisticList>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage.toFixed(0)}%</li>
        </StatisticList>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}