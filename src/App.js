import logo from './logo.svg';
import './App.css';
import Card from './composants/card';
import Compteur from './composants/compteur';
import Horloge from './composants/horloge';

function App() {
  return (
    <div className="App">
      <Card/>
      <Compteur/>
      <Horloge/>
    </div>
  );
}

export default App;
