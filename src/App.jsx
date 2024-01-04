import { useState } from 'react';

import UserI from './UserInput';
import Header from './Header';
import ResultsTable from './ResultsTable';

function App() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = UserInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserI UserInput={UserInput} onChange={handleChange} />
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputIsValid && <ResultsTable input={UserInput} />}
    </>
  );
}

export default App
