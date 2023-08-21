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

//Testing Recipe and methods
let testRecipe = new createRecipe("Chocolate Chip Cookies", "11 mins", 
'8')
//testRecipe.addDirections("Step One: Crack the eggs");
//testRecipe.addDirections("Step Two: Whisk liqued ingredients into the bowl");
console.log(testRecipe)

//Listens for when adding an ingredient, and displays it in the form
const ingredientField = document.getElementById("ingredients");
const ingredientBtn = document.getElementById("addIngredientBtn");
const ingredientList = document.getElementById("ingredentList");
const ingredientArr = [];

ingredientBtn.addEventListener("click", () => {
    event.preventDefault();
    if(ingredientField.value != "")
    {
    const ingredient = document.createElement("li");
    ingredient.innerHTML = ingredientField.value;
    ingredient.classList.add("ingredients");
    ingredientList.append(ingredient);
    ingredientArr.push(ingredient.innerHTML);
    ingredientField.value = "";
    }

})

//Listens for when adding a step, and displays it in the form
const directionField = document.getElementById("directions");
const directionBtn = document.getElementById("addDirectionsBtn");
const directionList = document.getElementById("directionsList");
const directionArr = [];

directionBtn.addEventListener("click", () => {
    event.preventDefault();
    if(directionField.value != "")
    {
    const direction = document.createElement("li");
    direction.innerHTML = directionField.value;
    directionList.append(direction);
    directionArr.push(direction.innerHTML);
    directionField.value = "";
    }
})

//Display Recipes

const displayRecipeSample = (recipeName, recipeAuthor, recipe ) => {
    const container = document.createElement("div");
    container.classList.add("recipeContainer")
    document.body.append(container)

    const sampleImg = document.createElement("div");
    sampleImg.classList.add("sampleRecipeImg")
    container.append(sampleImg);

    const sampleTitle = document.createElement("h1");
    sampleTitle.innerHTML = recipeName;
    sampleTitle.classList.add("sampleRecipeName");
    container.append(sampleTitle);

    const sampleRecipeAuthor = document.createElement("h2");
    sampleRecipeAuthor.innerHTML = recipeAuthor;
    sampleRecipeAuthor.classList.add("sampleRecipeAuthor");
    container.append(sampleRecipeAuthor);

    const seeRecipeBtn = document.createElement("button");
    seeRecipeBtn.innerHTML = "See Recipe"
    seeRecipeBtn.classList.add("seeRecipeBtn");
    container.append(seeRecipeBtn);

    //Displays full recipe info when clicking the specific button
    seeRecipeBtn.addEventListener("click", () => {
        console.log(recipe);
    })

}

const generateId = () => {
   let id = Math.floor(Math.random() * 100000);
   return id;
}


//ADD recipe To Local Storage

const addToLocalStorage = (recipeToAdd) => {
    localStorage.setItem(`recipe${generateId()}.`, JSON.stringify(recipeToAdd));
    console.log(localStorage);
}


const recipeName = document.getElementById("recipeName");
const recipeAuthor = document.getElementById("recipeAuthor")
const cookTime = document.getElementById("cookTime");
const servingSize = document.getElementById("servingSize");

//Gets all the information from the form fields and passes it into the createRecipe class to create a new recipe Object
const createRecipeBtn = document.getElementById("createRecipe");
createRecipeBtn.addEventListener("click", () => {
    event.preventDefault();
    console.log(recipeName.value);
    console.log(recipeAuthor.value);
    console.log(cookTime.value);
    console.log(servingSize.value);
    let recipe = new createRecipe(recipeName.value,recipeAuthor.value,cookTime.value,servingSize.value, ingredientArr, directionArr);
    //console.log(recipe)
    addToLocalStorage(recipe)
    displayRecipeSample(recipe.recipeName,recipe.recipeAuthor, recipe);

})


//Retrieve recipe From Local Storage and Display on DOM

//ADD Implementation to see full recipe
