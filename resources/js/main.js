//A class storing all of the ingredients and directions for the recipe. Including Recipe Name, Cook Time, Serving Size, Ingredents, & Directions
class createRecipe {
    constructor(recipeName, recipeAuthor, cookTime, servingSize){
        this.recipeName = recipeName;
        this.recipeAuthor = recipeAuthor;
        this.cookTime = cookTime;
        this.servingSize = servingSize;
        this.ingredientsArr = [];
        this.directionsArr = [];
    }

   //Method to add ingredients to the ingredients Array
    addIngredients(ingredient){
           this.ingredientsArr.push(ingredient);
    }

    //Method to add directions to the directions Array
    addDirections(directions){
        this.directionsArr.push(directions);
    }

    checkIngredients(){
        console.log(this.ingredientsArr);
    }

    checkDirections(){
        console.log(this.directionsArr);
    }
}

//Testing Recipe and methods
let testRecipe = new createRecipe("Chocolate Chip Cookies", "11 mins", 
'8')
testRecipe.addDirections("Step One: Crack the eggs");
testRecipe.addDirections("Step Two: Whisk liqued ingredients into the bowl");
console.log(testRecipe)

//Listens for when adding an ingredient, and displays it in the form
const ingredientField = document.getElementById("ingredients");
const ingredientBtn = document.getElementById("addIngredientBtn");
const ingredientList = document.getElementById("ingredentList");

ingredientBtn.addEventListener("click", () => {
    event.preventDefault();
    console.log(ingredientField.value);

    const ingredient = document.createElement("li");
    ingredient.innerHTML = ingredientField.value;
    ingredientList.append(ingredient);
    ingredientField.value = "";
})

//Listens for when adding a step, and displays it in the form
const directionField = document.getElementById("directions");
const directionBtn = document.getElementById("addDirectionsBtn");
const directionList = document.getElementById("directionsList");

directionBtn.addEventListener("click", () => {
    event.preventDefault();
    console.log(directionField.value);

    const direction = document.createElement("li");
    direction.innerHTML = directionField.value;
    directionList.append(direction);
    directionField.value = "";
})