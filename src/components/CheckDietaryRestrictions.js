import React from "react";
import dietaryRestrictions from "./../dataSets/dietaryRestrictions.json";
import Emoji from "./Emoji";

const CheckDietaryRestrictions = ({ recipe }) => {
  let restrictions = [];

  const dietaryRestrictions = (item) => {
    if (isDairy(item)) {
      restrictions = [
        ...restrictions,
        <div style={{ marginRight: "5px" }}>
          <Emoji symbol="✅" label="yes" text="Dairy-Free" />
        </div>,
      ];
    }

    if (isNutFree(item)) {
      restrictions = [
        ...restrictions,
        <div style={{ marginRight: "5px" }}>
          <Emoji symbol="✅" label="yes" text="Nut-Free" />
        </div>,
      ];
    }

    if (isGlutenFree(item)) {
      restrictions = [
        ...restrictions,
        <div style={{ marginRight: "5px" }}>
          <Emoji symbol="✅" label="yes" text="Gluten-Free" />
        </div>,
      ];
    }

    if (isHalal(item)) {
      restrictions = [
        ...restrictions,
        <div style={{ marginRight: "5px" }}>
          <Emoji symbol="✅" label="yes" text="Halal" />
        </div>,
      ];
    }

    return restrictions;
  };
  return dietaryRestrictions(recipe);
};

const isDairy = (ingredients) => {
  if (!!ingredients) {
    console.log(ingredients);
    console.log(dietaryRestrictions["dairy-free"]);
    dietaryRestrictions["dairy-free"].some((element) => {
      return Object.values(ingredients).map((i) => {
        return Object.is(element, i);
      });
    });
  }
};

const isGlutenFree = () => {
  console.log("Gluten Free Baby!");
  return true;
};

const isNutFree = () => {
  console.log("Nut Free Baby!");
  return true;
};

const isHalal = () => {
  console.log("Pork aint on this fork!");
  return true;
};

export {
  CheckDietaryRestrictions as default,
  isDairy,
  isHalal,
  isGlutenFree,
  isNutFree,
};
