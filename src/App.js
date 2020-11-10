import logo from './logo.svg';
import './App.css';
import StartButton from './lib/StartButton.js';
import HelloWorld from './HelloWorld.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld param1="test"></HelloWorld>
        <StartButton></StartButton>
      </header>
    </div>
  );
}

export default App;
