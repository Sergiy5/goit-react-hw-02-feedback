import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SectionWraper from './MainSection/section-title';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Statistics from './Statistics/statistics';
import Notification from './Notification/notification';

const OPTIONS = ["good", "neutral", "bad"]
class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  handleFeedback = (e) => {
    const currentBtn = e.target.name;
    this.setState((prevState) =>
      
    ({
      [currentBtn]: prevState[currentBtn] + 1, 
    }))
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    return total
  }
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state
    const positivePercentage = Number(((100 * good) / this.countTotalFeedback()).toFixed())
return positivePercentage
  }

  render() {
    const { good, neutral, bad } = this.state

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SectionWraper title="Please leave feadback">
          <FeedbackOptions options={OPTIONS} onLeaveFeedback={this.handleFeedback} />
        
          {this.countTotalFeedback() > 0 ? <Statistics            
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
            : <Notification message="There is no feedback"/>}
          </SectionWraper>
      </div>
    );
  }
}

export default App;
