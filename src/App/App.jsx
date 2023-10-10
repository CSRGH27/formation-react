import React, { useState } from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";

function App() {
  let [counter, setcounter] = useState(0);

  return (
    <div className="App">
      Mon compteur : {counter}
      <hr />
      <Button
        text="Retirer"
        click={() => {
          setcounter(counter - 1);
        }}
        type="submit"
      >
        -1
      </Button>
      <Button
        text="Ajouter"
        click={() => {
          setcounter(counter + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
