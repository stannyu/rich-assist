import { useState } from "react";
import RouterComponent from "./components/router/RouterComponent";

import "./assets/styles/App.scss";

function App() {
  return (
    <div className="global_container absolute top-0 right-0 bottom-0 left-0">
      <RouterComponent />
    </div>
  );
}

export default App;
