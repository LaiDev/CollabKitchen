import { loadFromStorage } from "./localStorageHandler.js";

export const UserRecipes = document.getElementById("users-recipes");
const emptyStorageMessge = document.getElementById("empty-storage-message");
//If local storage is empty, display "There's nothing here. Otherwise render data from storage"
const handleHomePageContent = () => {
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

handleHomePageContent();