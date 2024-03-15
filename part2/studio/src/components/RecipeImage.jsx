import recipedata from "./recipe.json";

function RecipeImage() {
 const recipeImage = recipedata.map((data) => (
    <div key = {data.recipeImage}>
      <img src={data.recipeImage}></img>
    </div>
  ))
  return recipeImage;
}
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 