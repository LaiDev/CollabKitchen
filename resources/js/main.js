import { clearLocalStorage } from "./localStorageHandler.js";
import { createRecipe, addIngredientsToList, addStepToList, createRecipeObj } from "./recipeCreation.js";
import { displayRecipeSample } from "./recipeDisplay.js";


//Adds ingredient to ingredient list
const ingredientBtn = document.getElementById("addIngredientBtn");
if(ingredientBtn != null){
ingredientBtn.addEventListener("click", () => {
    event.preventDefault();
    addIngredientsToList();
    })
}

//Adds steps to ingredient list
const directionBtn = document.getElementById("addDirectionsBtn");
if(directionBtn != null){
directionBtn.addEventListener("click", () => {
    event.preventDefault();
    addStepToList();
    })
}

//Creates a new Recipe Obj when submitting the form
const createRecipeForm = document.getElementById("recipe-creation-form");
if(createRecipeForm != null){
createRecipeForm.addEventListener("submit", () => {
    event.preventDefault();
    createRecipeObj(); 
    createRecipeForm.reset();   
})
}

//Handles clearing the users local storage
const clearStorageBtn = document.getElementById("clear-storage-btn");
clearStorageBtn.addEventListener("click", () => {
    clearLocalStorage();
})

//ADD Implementation to see full recipe

