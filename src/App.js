import logo from './logo.svg';
import './App.css';

const theCode = process.env.REACT_APP_SUPER_SECRET_CODE;

function App() {
  return (
    <div className="App">
      <div style={{margin: " 0 auto"}}>{theCode}</div>
    </div>
  );
}

export default App;
