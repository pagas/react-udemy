import styles from './CalculateResult.module.css';

const CalculatorResults = (props) => {

  console.log('mm', props)

  return (
    <div>
      {props.results == null || props.results.length === 0
        ? <p>No Results</p>
        : <table className={styles.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map(record => (
              <tr key={record.year}>
                <td>{record.year}</td>
                <td>{record.savingsEndOfYear.toFixed(2)}</td>{/* TOTAL SAVING END OF THE YEAR */}
                <td>{record.yearlyInterest.toFixed(2)}</td>
                <td>{record.totalInterest.toFixed(2)}</td>
                <td>{record.totalContribution.toFixed(2)}</td>
              </tr>
            ))}

          </tbody>
        </table>
      }
    </div>
  )
}

export default CalculatorResults;