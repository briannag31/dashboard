import React from "react";
import "./styles.css";
import Analysis from "./components/Analysis";
import Menu from "./components/Menu";
import Ratings from "./components/Ratings";
import Reviews from "./components/Reviews";
import Visitors from "./components/Visitors";




function App() {
  return (
    <div className="App">
      <section className="menu">
        <Menu />
      </section>
      <section className="top">
        <Reviews />
        <Ratings />
        <Analysis />
        </section>
        <section className="bottom">
        <Visitors />
      </section>

    </div>
  );
}

export default App;
