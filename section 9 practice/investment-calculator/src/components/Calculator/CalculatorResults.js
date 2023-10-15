import styles from './CalculateResult.module.css';
import { Currency } from '@depay/local-currency'


const CalculatorResults = (props) => {

  // const locale = (navigator && navigator.language) || "en"; console.log(locale);
  
  // const formatter = new Intl.NumberFormat(locale, {
  //   style: 'currency',
  //   currency: 'USD', // "GBP"
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });

  const formatNumber = (number) => {
    let currency = new Currency({ amount: number })
    return currency.toString()
  }

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
                <td>{formatNumber(record.savingsEndOfYear)}</td>{/* TOTAL SAVING END OF THE YEAR */}
                <td>{formatNumber(record.yearlyInterest)}</td>
                <td>{formatNumber(record.totalInterest)}</td>
                <td>{formatNumber(record.totalContribution)}</td>
              </tr>
            ))}

          </tbody>
        </table>
      }
    </div>
  )
}

export default CalculatorResults;