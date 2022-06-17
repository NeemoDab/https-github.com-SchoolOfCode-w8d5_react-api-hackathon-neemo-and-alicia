
import './App.css';
import CatButton from '../CatButton';

function handleClick() {
  CatButton();
}

function App() {
  return (
    <div className="App">
      <h1>CATS ARE LIFE!</h1>
      <CatButton />
      <button className="cat-button" onClick={handleClick}>GET ME A CAT FOR MY LIFE</button>
    </div>
  );
}

export default App;
