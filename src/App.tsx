import React from 'react';
import WeatherContainer from "./components/WeatherContainer";
import Header from "./components/Header"

function App() {

  return (
    <div className="App">
      <Header/>
      <WeatherContainer />
    </div>
  );
}

export default App;
