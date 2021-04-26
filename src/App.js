import React from "react";
import DrinkSearch from "./components/DrinkSearch";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="img">
        <h1>Look for your Cocktail</h1>
        <DrinkSearch />
      </div>
      <Footer />
    </div>
  );
};

export default App;
