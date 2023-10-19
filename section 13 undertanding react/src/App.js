import React, {useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const clickButtonHandler = () => {
    setShowParagraph(prev => !prev)
  }

  console.log('app running')

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new</p>}
      <Button onClick={clickButtonHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
