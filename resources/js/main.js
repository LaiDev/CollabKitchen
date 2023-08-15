//A class storing all of the ingredients and directions for the recipe. Including Recipe Name, Cook Time, Serving Size, Ingredents, & Directions
class createRecipe {
    constructor(recipeName, cookTime, servingSize){
        this.recipeName = recipeName;
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