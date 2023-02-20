import React, { useCallback, useState } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './Demo/DemoOutput';


function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  }

  // useCallback -> 함수가 재생성 되지 않도록 고정
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);  // 외부 변수에 따라 변경되게 하고싶으면 추가 필요

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow Toogle</Button>
      <Button onClick={toggleParagraphHandler}>toggle Paragraph!</Button>
    </div>
  );
}

export default App;
