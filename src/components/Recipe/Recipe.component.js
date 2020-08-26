import React from "react";

// I have access to the props because of the linking occurring in my Router.js
const Recipe = (props) => {
  console.log(props);
  return <div>Recipe Component</div>;
};

export default Recipe;
