import React, { Component } from "react";
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export class App extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0
}
  
 handleClick = (evt) => {
    const { name } = evt.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
 };
    
countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = (good * 100) / totalFeedback || 0;
    return positivePercentage;
  }

    render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
            <Section title="Please leave your feedback">
<FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick}/>
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />) : <p>There is no feedback</p>}

        </Section>
      </div>
    );
  }
}
