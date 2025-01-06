import { useState } from "react";

import "./App.css";
import Dropdown from "./Components/Dropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dropdown />
    </>
  );
}

export default App;
