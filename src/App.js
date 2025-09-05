import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('kilometers');
  const [result, setResult] = useState(null);

  const conversionRates = {
    meters: { meters: 1, kilometers: 0.001, miles: 0.000621371 },
    kilometers: { meters: 1000, kilometers: 1, miles: 0.621371 },
    miles: { meters: 1609.34, kilometers: 1.60934, miles: 1 },
  };

  const convert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Please enter a valid number');
      return;
    }
    const rate = conversionRates[fromUnit][toUnit];
    setResult((value * rate).toFixed(4));
  };

  return (
    <div className="App">
      <h2>Unit Converter</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />
      <div>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
        </select>
        <span> ➡️ </span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
        </select>
      </div>
      <button onClick={convert}>Convert</button>
      {result !== null && <h3>Result: {result} {toUnit}</h3>}
    </div>
  );
}

export default App;