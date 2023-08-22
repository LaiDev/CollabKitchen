import { displayRecipeSample } from "./recipeDisplay.js";

//Generate an ID for items in storage
const generateId = () => {
    let id = Math.floor(Math.random() * 100000);
    return id;
 }

//ADD recipe To Local Storage
const addToLocalStorage = (recipeToAdd) => {
    localStorage.setItem(`recipe${generateId()}`, JSON.stringify(recipeToAdd));
}

//Retrieve recipe From Local Storage and Displays on DOM
const loadFromStorage = () => {
    Object.keys(localStorage).forEach((key) => {
     let recipe = JSON.parse(localStorage.getItem(key));
     displayRecipeSample(recipe.recipeName, recipe.recipeAuthor, recipe);
    })
}

//Clears storage
const clearLocalStorage = () =>{
    localStorage.clear();
    window.location.reload();
}

 export { loadFromStorage, clearLocalStorage, addToLocalStorage }