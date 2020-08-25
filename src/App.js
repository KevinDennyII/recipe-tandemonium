import React, { useState } from "react";
import Emoji from "./components/Emoji";
//import IngredientsComponent from "./components/IngredientsComponent";
import SearchIngredientsComponent from "./components/SearchIngredients/SearchIngredients.component";
import "./App.css";

const App = () => {
  //const [apiUrl, setApiUrl] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "inline-block" }}>
          <Emoji symbol="🌮" label="taco" />
          <span style={{ margin: "10px" }}>
            Guac <i>Tandem</i>onium
          </span>
          <Emoji symbol="🌮" label="taco" />
        </div>
      </header>
      <div style={{ margin: "5px" }}>
        <SearchIngredientsComponent />
        {/*  <form onSubmit={handleSubmit}>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      name="recipe-api"*/}
        {/*      style={{ margin: "5px" }}*/}
        {/*      placeholder={`Enter Your Recipe API`}*/}
        {/*      value={apiUrl}*/}
        {/*      onChange={() => handleChange}*/}
        {/*    />*/}
        {/*    <input type="submit" value="submit" />*/}
        {/*  </form>*/}
      </div>
      {/*<IngredientsComponent apiUrl={apiUrl} />*/}
    </div>
  );
};

export default App;
