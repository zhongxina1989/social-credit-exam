import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import SplashScreen from './SplashScreen';
import ExamIntroScreen from './ExamIntroScreen';

function App() {
  const [showExamIntroScreen, setExamIntroScreen] = useState(false);
  const rootRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setExamIntroScreen(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    const timeoutId = setTimeout(() => {
      setExamIntroScreen(true);
    }, 3000);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={rootRef}>
      {showExamIntroScreen ?  <ExamIntroScreen/> : <SplashScreen/>}
    </div>
  );
}

export default App;