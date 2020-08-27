import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

// I have access to the props because of the linking occurring in my Router.js
const Recipe = (props) => {
  const [activeRecipe, setActiveRecipe] = useState([]);

  const loadRecipe = async () => {
    const title = props.location.state.recipe;
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`
    );
    const results = await request.json();
    setActiveRecipe(results.meals[0]);
  };

  useEffect(() => {
    loadRecipe();
  }, []);
  console.log(props);
  console.log(activeRecipe);

  return (
    <div className="container">
      {activeRecipe.length !== 0 && (
        <div className={styles.activeRecipe}>
          <img
            //className={styles.activeRecipeImg}
            src={activeRecipe.strMealThumb}
            alt={activeRecipe.strMeal}
          />
          <h3 className={styles.activeRecipeTitle}>{activeRecipe.strMeal}</h3>
          <p className={styles.activeRecipeWebsite}>
            Source:{" "}
            <a href={activeRecipe.strSource}>{activeRecipe.strSource}</a>
          </p>
          <button className={styles.activeRecipeButton}>
            <Link to="/">Back to Search</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipe;
