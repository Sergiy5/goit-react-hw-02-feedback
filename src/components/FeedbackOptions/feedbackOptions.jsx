import React from "react";
import {OptionsBtns, Button}  from './feedbackOptions.styled' 

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    
        return (<OptionsBtns>
               
                {options.map(option => {
                      return <Button key={option} type="button" name={option} onClick={onLeaveFeedback}>{option}</Button>
               })}                       
        </OptionsBtns>)

}
export default FeedbackOptions