import { useState } from "react";
import RouterComponent from "./components/router/RouterComponent";

import "./styles/App.scss";

function App() {
  const [count, setCount] = useState(0);

  const countManipulation = () => {
    setCount((prevCount) => prevCount + 10 * 1.2);
  };

  return (
    <>
      <RouterComponent />
    </>
    // <div className="wrapper">
    //   app: {count}
    //   <button onClick={countManipulation} className="btn btn-primary rounded">Add 10!</button>
    //   <h1 className="text-3xl col-span-4 font-bold underline text-center hover:no-underline cursor-pointer">Hello world!</h1>

    //   <button className="btn text-4xl bg-orange-200">Button</button>
    // </div>
  );
}

export default App;
