import React, { useState } from 'react';
import './App.css';

function App1() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="App">
      <div id="google_translate_element">
      </div>

    </div>
  );
}

export default App1;
