import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>React is so cool!</h1>
        </p>
        <body>
          Other things that are cool:
          <ul>
            <li>mint</li>
            <li>polar bears</li>
            <li>ice cream</li>
          </ul>
        </body>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
