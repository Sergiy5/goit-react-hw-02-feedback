

const Statistics = ({title, good, neutral, bad, total, positivePercentage = 0 }) => {
  return (<div>
      <h2>Statisctics</h2>
        
          <p>Good: { good }</p>
          <p>Neutral: { neutral }</p>
          <p>Bad: { bad }</p>
          <p>Total: { total }</p>
          <p>Positive feedback: { positivePercentage }%</p>
        </div>)
}

export default Statistics