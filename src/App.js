import React, { useState } from "react";
import Emoji from "./components/Emoji";
//import RecipesComponent from "./components/RecipesComponent";
import SearchRecipesComponent from "./components/SearchRecipes/SearchRecipes.component";
import "./App.css";

//const API_KEY = "";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipe = async (e) => {
    const searchValue = e.target.elements.searchRecipeValue.value;
    e.preventDefault(); // need to prevent page refresh
    const api_call = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    );
    const data = await api_call.json();
    setRecipes(data.meals);
    console.log(searchValue);
  };

  console.log(recipes);

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
        <SearchRecipesComponent getRecipe={getRecipe} />
        {console.log(recipes)}
        {recipes.map((recipe) => {
          return (
            <div>
              <img
                src={recipe.strMealThumb}
                style={{ height: "150px", width: "150px" }}
                alt={recipe.strMeal}
              />
              <p key={recipe.idMeal}>{recipe.strMeal}</p>
            </div>
          );
        })}
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
      {/*<RecipesComponent apiUrl={apiUrl} />*/}
    </div>
  );
};

export default App;
