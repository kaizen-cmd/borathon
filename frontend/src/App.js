import logo from './logo.svg';
import InputData from './InputData';
import DisplayData from './DisplayData';
import DBStatus from './DBStatus';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Data">
        <InputData/>
        <DisplayData/>
      </div>
      <DBStatus/>
    </div>
  );
}

export default App;
