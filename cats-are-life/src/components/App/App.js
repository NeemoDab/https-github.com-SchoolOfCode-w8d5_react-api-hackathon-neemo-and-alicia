import React, {useState} from "react";
import './App.css';
import CatDisplay from '../CatButton';

function HandleClick() {
  const [isClicked, setIsClicked] = useState(false);
  
}

function App() {
  return (
    <div className="App">
      <h1>CATS ARE LIFE!</h1>
      <CatDisplay />
      <button className="cat-button" onClick={HandleClick}>GET ME A CAT FOR MY LIFE</button>
    </div>
  );
}

export default App;
