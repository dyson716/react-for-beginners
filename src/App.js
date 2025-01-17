import Button from "./Button";
import styles from "./App.module.css";

import Home from "./routes/Home";

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  /* Practice useState()

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    
    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }

  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  )
    */

  /* Practice useEffect()

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));

    setLoading(false);
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <hr/>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin, index) =>
          <li key={index}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
        )}
      </ul>
    </div>
  )

  */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={
            <h1>Say Hello~~~</h1>
          }
        />
      </Routes>
    </Router>
  )
}

export default App;