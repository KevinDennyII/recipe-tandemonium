import React, { useEffect, useState } from "react";
import Emoji from "./components/Emoji";
//import RecipesComponent from "./components/RecipesComponent";
import SearchRecipes from "./components/SearchRecipes/SearchRecipes.component";
import Recipes from "./components/Recipes/Recipes.component";
import "./App.css";

//const API_KEY = "";
const App = () => {
  const [recipes, setRecipes] = useState([]);

  // this will grab the search value and will be used as the query on the api call
  // instead of using the .then().then "callback hell" notation, i decided to use the
  // async/await call as it is much more readable...readability was the main goal here.
  const loadTacoRecipes = async () => {
    const api_call = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=taco`
    );
    const data = await api_call.json();
    setRecipes(data.meals);
  };

  useEffect(() => {
    loadTacoRecipes();
  }, []);

  const getRecipe = async (e) => {
    const searchValue = e.target.elements.searchRecipeValue.value;
    e.preventDefault(); // need to prevent page refresh
    recipes.filter((recipe) => {});
    console.log(searchValue);
  };

  useEffect(() => {
    const recipeJSON = JSON.stringify(recipes);
    localStorage.setItem("recipes", recipeJSON);
  }, [recipes]);

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
        <SearchRecipes getRecipe={getRecipe} />
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
