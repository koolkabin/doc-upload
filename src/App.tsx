import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [apiDate, setApiDate] = useState('');
  const [apiRates, setApiRates] = useState([]);

  useEffect(() => {
    console.log('check');
    async function fetchFreeMovies() {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch("https://latest.currency-api.pages.dev/v1/currencies/eur.json", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          //const d1 = result
          console.log(result, typeof(result));
          setApiDate(result.date);
          setApiRates(result.eur);
        })
        .catch((error) => console.error(error));
    }

    // Call the function
    fetchFreeMovies();

  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <span>Date: {apiDate}</span>
        <p>Rates:</p>
        <ul>
        {Object.keys(apiRates).map((key) => (
          <li key={key}>{`${key}: ${apiRates[key]}`}</li>
        ))}
        </ul>

      </div>
    </>
  )
}

export default App
