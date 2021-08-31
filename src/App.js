import React, { useState } from 'react';
import data from './data';
import './App.css';
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>questions and answers about login</h2>
        </div>
        <div className="accordions">
         <Questions questions={questions}/>
        </div>
      </div>
    </div>
  );
}

export default App;