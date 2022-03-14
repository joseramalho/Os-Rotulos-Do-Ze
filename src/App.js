import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/labels/pt/1.jpg' } className="App-logo" alt="logo" />
        <p>
          Os Rótulos do Zé. Soon...
        </p>
      </header>
    </div>
  );
}

export default App;
