import { React, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import './App.css';

function App(props) {
  // scroll to top on page change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <div className="App">
      {props.content}
    </div>
  );
}

export default App;
