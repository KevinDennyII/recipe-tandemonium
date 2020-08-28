import React, { useEffect, useState } from "react";
import Emoji from "./components/Emoji";
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
      `https://www.themealdb.com/api/json/v1/1/search.php?s=sandwich`
    );
    const data = await api_call.json();
    setRecipes(data.meals);
  };

  useEffect(() => {
    loadTacoRecipes();
  }, []);

  // grabbing recipes based on the events from the Search Recipes Component
  const getRecipes = (e) => {
    // Here I am setting default values to prevent undefined errors from occurring
    if (!typeof e.target.elements === undefined) {
      const searchValue = e.target.elements.searchRecipeValue.value;
      e.preventDefault(); // need to prevent page refresh
      const results = recipes.filter((recipe) => {
        const recipeNameLowerCase = recipe.strMeal.toLowerCase();
        return recipeNameLowerCase.includes(searchValue);
      });
      setRecipes(results);
    }
  };

  useEffect(() => {
    const recipeJSON = JSON.stringify(recipes);
    localStorage.setItem("originalListOfRecipes", recipeJSON);
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
        <SearchRecipes getRecipes={getRecipes} />
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
