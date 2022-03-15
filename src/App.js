import './App.css';
import Breweries  from './components/Breweries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/labels/pt/1.jpg' } className="App-logo" alt="" />
        <p>
          Os Rótulos do Zé. Soon...
        </p>
      </header>
      <Breweries />
    </div>
  );
}

export default App;
