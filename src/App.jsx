import { useState } from 'react';

import Header from './Header';
import UserInput from './UserInput';
import ResultsTable from './ResultsTable';

function App() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput UserInput={UserInput} onChange={handleChange} />
      <ResultsTable input={UserInput} />
    </>
  )
}

export default App
