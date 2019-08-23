import React from "react";
import ReactDOM from "react-dom";
import ViewAll from './components/ViewAll';

import "./styles.css";

function App() {
  return (
    <div>
      <ViewAll />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
