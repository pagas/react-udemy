import { useState } from 'react';
import CalculatorForm from './components/Calculator/CalculatorForm';
import CalculatorResults from './components/Calculator/CalculatorResults';
import Header from './components/UI/Header';

function App() {
  const [calcResults, setCalcResults] = useState(null)

  const calculateHandler = (userInput) => {

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    let totalContribution = 0;
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalContribution += yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalContribution: totalContribution,
        totalInterest: totalInterest
      });
    }

    setCalcResults(yearlyData);
  }

  return (
    <div>
      <Header />
      <CalculatorForm onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <CalculatorResults results={calcResults} />
    </div>
  );
}

export default App;
