import React from "react";
import ReactDOM from "react-dom";
// Redux Store
import { DataProvider } from "./store/index";
// Main Components
import { ResumeScene } from "./scenes";

const App = (
  <DataProvider contractAddress={""}>
    <ResumeScene />
  </DataProvider>
);

ReactDOM.render(App, document.getElementById("root"));
