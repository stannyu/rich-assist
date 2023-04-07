import { useState } from "react";

import "./styles/App.scss";

function App() {
  const [count, setCount] = useState(0);

  const countManipulation = () => {
    setCount((prevCount) => prevCount + 10 * 1.2);
  }

  return <div>app: {count}
  <button onClick={countManipulation}>Add 10!</button></div>;
}

export default App;
