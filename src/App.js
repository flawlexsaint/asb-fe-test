import React from "react";
import "./App.css";

import Navbar from "./Layout/nav_components/navbar";
import Metric from "./Layout/metric_components/metric";
import Summmary from "./Layout/summary_components/summary";
import Data from "./Layout/data_components/data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Metric />
      <div className="section mb-4">
        <div className="grid_1">
          <Summmary />
        </div>
        <div className="grid_2">
          <Data />
        </div>
      </div>
    </div>
  );
}

export default App;
