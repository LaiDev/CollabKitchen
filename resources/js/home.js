import { loadFromStorage } from "./localStorageHandler.js";

export const UserRecipes = document.getElementById("users-recipes");
const wrapper = document.querySelector(".wrapper");
const emptyStorageMessge = document.getElementById("empty-storage-message");
//If local storage is empty, display "There's nothing here. Otherwise render data from storage"
const handleHomePageContent = () => {

    wrapper.classList.remove("recipes-wrapper");
    if(localStorage.length != 0)
    {
        if(emptyStorageMessge != null)
        {
            emptyStorageMessge.classList.add("test");
            loadFromStorage();
        }
    }
    if(UserRecipes != null){
    UserRecipes.classList.add("test")}
}

const homeCreateBtn = document.getElementById("home-create-btn");
//Load Recipe Creation Form
if(homeCreateBtn != null)
{
    homeCreateBtn.addEventListener("click", () => {
        window.location.href = "createRecipe.html";
    } )
}

//Clears the DOM
const clearHomePage = () => {
wrapper.innerHTML = "";
}

let step = 1;
let generateStep = () => {
    return step++;
}

//Renders full recipe in DOM
const loadFullRecipe = (author, name, cookTime, servingSize, ingredientsArr, directionsArr) => {
    const authorContainer = document.createElement("div");
    authorContainer.classList.add("author-container");
    wrapper.append(authorContainer);

    const authorSubTitle = document.createElement("p");
    authorSubTitle.innerHTML = "From the kitchens of";
    authorSubTitle.classList.add("author-sub-title");
    authorContainer.append(authorSubTitle);

    const authorName = document.createElement("span");
    authorName.innerHTML = author;
    authorName.classList.add("author-name");
    authorContainer.append(authorName);

    const recipeInfo = document.createElement("div");
    recipeInfo.classList.add("recipe-info");
    wrapper.append(recipeInfo) 

    const recipeName = document.createElement("span");
    recipeName.classList.add("recipe-name");
    recipeName.innerHTML = name;
    recipeInfo.append(recipeName);

    const recipeInfoList = document.createElement("ul");
    recipeInfoList.classList.add("recipe-info-list");
    recipeInfo.append(recipeInfoList);

    const cookTimeItem = document.createElement("li");
    cookTimeItem.classList.add("cook-time");
    cookTimeItem.innerHTML = "Cook Time: " + cookTime;
    recipeInfoList.append(cookTimeItem);

    const servingSizeItem = document.createElement("li");
    servingSizeItem.classList.add("cook-time");
    servingSizeItem.innerHTML = "Serves: " + servingSize;
    recipeInfoList.append(servingSizeItem);

    const ingredientsContainer = document.createElement("div");
    ingredientsContainer.classList.add("ingredients-container");
    wrapper.append(ingredientsContainer);

    const ingredientsHeader = document.createElement("h2");
    ingredientsHeader.classList.add("ingredients-header");
    ingredientsHeader.innerHTML = "Ingredients";
    ingredientsContainer.append(ingredientsHeader);

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("ingredient-list");
    ingredientsContainer.append(ingredientList);

   ingredientsArr.forEach((e) => {
    let ingredient = document.createElement("li");
    ingredient.classList.add("full-ingredient-list-item");
    ingredient.innerHTML = e;
    ingredientsContainer.append(ingredient);
   })
   
    const directionsContainer = document.createElement("div");
    directionsContainer.classList.add("directions-container");
    wrapper.append(directionsContainer);

    const directionsHeader = document.createElement("h2");
    directionsHeader.classList.add("directions-header");
    directionsHeader.innerHTML = "Directions";
    directionsContainer.append(directionsHeader);

    const directionsList = document.createElement("ul");
    directionsList.classList.add("direcetions-list");
    directionsContainer.append(directionsList);

   directionsArr.forEach((e) => {
    let directions = document.createElement("li");
    directions.classList.add("full-direction-list-item");
    directions.innerHTML = "Step " + generateStep() + ": " + e;
    directionsContainer.append(directions);
   })

   const backBtn = document.createElement("button");
    backBtn.id = "back-btn"
    backBtn.innerHTML = "Back";
    wrapper.append(backBtn);

    //Goes back to main home page on click
    backBtn.addEventListener("click", () => {
    window.location.href = "home.html";
    })
}


handleHomePageContent();

export { clearHomePage, loadFullRecipe }