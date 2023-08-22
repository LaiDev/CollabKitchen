import { loadFromStorage } from "./main.js";
const UserRecipes = document.getElementById("users-recipes");
const emptyStorageMessge = document.getElementById("empty-storage-message");
//If local storage is empty, display "There's nothing here. Otherwise render data from storage"
const handleHomePageContent = () => {
    if(localStorage.length != 0)
    {
        emptyStorageMessge.classList.add("test");
        loadFromStorage();
    }

    UserRecipes.classList.add("test")
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