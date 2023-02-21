import React from "react";
import "./App.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import CatWiki from "./components/CatWiki";

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <CatWiki />
      </ErrorBoundary>
    </div>
  );
}

export default App;
