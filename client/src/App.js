import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import CatWiki from "./components/CatWiki";

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header> */}
      <ErrorBoundary>
        <CatWiki />
      </ErrorBoundary>
    </div>
  );
}

export default App;
