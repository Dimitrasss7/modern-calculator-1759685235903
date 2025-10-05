'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [darkMode, setDarkMode] = useState(false);

  const inputNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const calculate = () => {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto p-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
          <div className="text-right text-3xl">{display}</div>
          <div className="grid grid-cols-4 gap-2">
            {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','+','='].map(btn => (
              <button 
                key={btn}
                onClick={() => btn === '=' ? calculate() : inputNumber(btn)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}