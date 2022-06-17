
import './App.css';
import CatButton from '../CatButton';
import { useState } from 'react';


function App() {
  const [currentCats, fetchCats]= useState(false)
  function handleClick() {
    // currentCats === true ? 
    // fetchCats(false) : fetchCats(true) 
    if(currentCats === true){
      fetchCats(false)
    }else{
      fetchCats(true)
    }
  }
  return(
    <div className="App">
      <h1>CATS ARE LIFE!</h1>
      <CatButton getCats={currentCats}/>
      <button className="cat-button" onClick={handleClick}>GET ME A CAT FOR MY LIFE</button>
    </div>
  );
}

export default App;
