import { useState } from 'react';
import CalculatorForm from './components/Calculator/CalculatorForm';
import CalculatorResults from './components/Calculator/CalculatorResults';
import Header from './components/UI/Header';

function App() {
  const [calcResults, setCalcResults] = useState(null)

  const calculateHandler = (results) => {
    console.log('result', results)
    setCalcResults(results);
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
