import './styles.scss';
import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [state, setState] = useState("CLICK ME");

  return (
  <div>
  <h1>Projects:</h1>
  <ul>
    <li><a target='_blank' href="https://terro216.github.io/fcc-portfolio/">fcc portfolio (timer,drumpad,etc)</a></li>
    <li><a target='_blank' href="https://terro216.github.io/cinema-react/">react-cinema</a></li>
  </ul>
  <button onClick={() => setState("CLICKED")}>{state}</button>
  </div>
  );
} 

render(<App />, document.getElementById("root"));