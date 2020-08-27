import dietaryRestrictions from "./../dataSets/dietaryRestrictions.json";

export const isDairy = (ingredients) => {
  if (!!ingredients) {
    console.log(ingredients);
    console.log(dietaryRestrictions["dairy-free"]);
    dietaryRestrictions["dairy-free"].some((element) => {
      for (let value of Object.values(ingredients)) {
        return Object.is(element, value);
      }
    });
  }

  //return true;
};

export const isGlutenFree = () => {
  console.log("Gluten Free Baby!");
  return true;
};

export const isNutFree = () => {
  console.log("Nut Free Baby!");
  return true;
};

export const isHalal = () => {
  console.log("Pork aint on this fork!");
  return true;
};
