import { addToLocalStorage } from "./localStorageHandler.js";

//A class storing all of the ingredients and directions for the recipe. Including Recipe Name, Cook Time, Serving Size, Ingredents, & Directions
class createRecipe {
    constructor(recipeName, recipeAuthor, cookTime, servingSize, ingredientsArr, directionsArr){
        this.recipeName = recipeName;
        this.recipeAuthor = recipeAuthor;
        this.cookTime = cookTime;
        this.servingSize = servingSize;
        this.ingredientsArr = ingredientsArr;
        this.directionsArr = directionsArr;;
    }

}

//Listens for when adding an ingredient, and displays it in the form
const ingredientField = document.getElementById("ingredients");

const ingredientList = document.getElementById("ingredentList");
const ingredientArr = [];
const addIngredientsToList = () => {
    if(ingredientField.value != "")
    {
    const ingredient = document.createElement("li");
    ingredient.innerHTML = ingredientField.value;
    ingredient.classList.add("ingredient-list-item");
    ingredientList.append(ingredient);
    ingredientArr.push(ingredient.innerHTML);
    ingredientField.value = "";
    }
}

//Listens for when adding a step, and displays it in the form
const directionField = document.getElementById("directions");
const directionList = document.getElementById("directionsList");
const directionArr = [];
const addStepToList = () => {
if(directionField.value != "")
    {
    const direction = document.createElement("li");
    direction.innerHTML = directionField.value;
    direction.classList.add("direction-list-item")
    directionList.append(direction);
    directionArr.push(direction.innerHTML);
    directionField.value = "";
    }
}

//Gets all the information from the form fields and passes it into the createRecipe class to create a new recipe Objec
const createRecipeObj = () => {
    let recipe = new createRecipe(recipeName.value,recipeAuthor.value,cookTime.value,servingSize.value, ingredientArr, directionArr);
    addToLocalStorage(recipe)
}

export { createRecipe, addIngredientsToList, addStepToList, createRecipeObj}