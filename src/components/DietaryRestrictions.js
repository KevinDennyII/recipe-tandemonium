import React from "react";
import * as isVegan from "is-vegan";
import dietaryRestrictions from "./../dataSets/dietaryRestrictions.json";
import Emoji from "./Emoji";

const DietaryRestrictions = ({ recipe }) => {
  let restrictions = [];

  const restrictionTexts = ["Gluten-Free", "Nut-Free", "Halal", "Dairy-Free"];

  for (let text of restrictionTexts) {
    //console.log(restrictionFound(recipe, text));
    if (restrictionFound(recipe, text)) {
      restrictions = [
        ...restrictions,
        <div key={`${recipe.idMeal}-${text}`} style={{ marginRight: "5px" }}>
          <Emoji symbol="✅" label="yes" text={text} />
        </div>,
      ];
    }
  }
  return restrictions;
};

const restrictionFound = (ingredients, restriction) => {
  if (!!ingredients && !(typeof restriction === undefined)) {
    // if (Object.is(restriction, "Vegan")) {
    //   return isVegan.isVeganIngredientList([Object.values(ingredients)]);
    // } else
    return dietaryRestrictions[restriction].every((element) => {
      const results = Object.values(ingredients).map((word) => {
        if (!!word) {
          word = word.toLowerCase();
          //if it is a string that has two words like "sour cream" check for both words
          if (word.indexOf(" ") >= 0) {
            const searchStringArray = word.split(" ").filter(Boolean);
            // if a restricted ingredient is found we want to return false
            return !searchStringArray.includes(element);
          }
        }
        return true;
      });
      // the results is an array of truthy values, if any value in the array is found to be false
      // then return false to show that it does NOT meet the requirement of the restriction
      return !results.includes(false);
    });
  }
};

export { DietaryRestrictions as default, restrictionFound };
