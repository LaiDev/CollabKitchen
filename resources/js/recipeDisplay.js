import { UserRecipes } from "./home.js";

const displayRecipeSample = (recipeName, recipeAuthor, recipe ) => {
    const container = document.createElement("div");
    container.classList.add("recipe-container")
    UserRecipes.append(container)

    const sampleImg = document.createElement("div");
    sampleImg.classList.add("sample-recipe-img")
    container.append(sampleImg);

    const sampleTitle = document.createElement("h1");
    sampleTitle.innerHTML = recipeName;
    sampleTitle.classList.add("sample-recipe-name");
    container.append(sampleTitle);

    const sampleRecipeAuthor = document.createElement("h2");
    sampleRecipeAuthor.innerHTML = recipeAuthor;
    sampleRecipeAuthor.classList.add("sample-recipe-author");
    container.append(sampleRecipeAuthor);

    const seeRecipeBtn = document.createElement("button");
    seeRecipeBtn.innerHTML = "See Recipe"
    seeRecipeBtn.classList.add("see-recipe-btn");
    container.append(seeRecipeBtn);

    //Displays full recipe info when clicking the specific button
    seeRecipeBtn.addEventListener("click", () => {
        console.log(recipe);
    })

}

export { displayRecipeSample }