# AmazonRecipes
Ryan is a smart ass

//object that holds ingredients
function ingredientObject(name,amount,unit) {
    this.name = name;
    this.amount = amount;   //number of units
    this.unit = unit;       //weight or volume unit used
    printIngredient = function() {
        console.log(amount + " " + unit + " of " + name);
    }
}

//object that holds recipes
var recipe = function(){
    this.ingredientList = [];
    this.preparation = "";      //Text instructions for preparation
    this.imageLocation = "";    //link to image
    this.addIngredient = function(ingredient) {
        this.ingredientList.push(ingredient); //adds an ingredient Object to the ingredients list
    };
    printRecipe = function() {
        console.log(this.preparation);
        for (var i in ingredientList) {
            i.printIngredient();
        };
    };
};

var searedScallops = new recipe;
searedScallops.preparation = "Clean scallops thoroughly. Mince garlic. Heat pan with a light amount of butter. Cook the scallops and add the garlic. Allow the scallops to cook for three to four minutes, then flip. Cook for an additional three to four minutes. Turn off the heat, salt, and add lemon juice to pan. Serve immediately."
var scallop = ingredientObject("scallop", 4, "pieces");
searedScallops.addIngredient(scallop);
searedScallops.printRecipe(); //update