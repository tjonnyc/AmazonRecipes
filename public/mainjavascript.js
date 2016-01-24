//object that holds ingredients
function ingredientObject(name, amount, unit) {
    this.name = name;
    this.amount = amount;   //number of units
    this.unit = unit;       //weight or volume unit used
    this.printIngredient = function() {
        alert(amount + " " + unit + " of " + name);
    }
};

//object that holds recipes
var recipe = function(){
    this.ingredientList = [];
    this.preparation = "";      //Text instructions for preparation
    this.imageLocation = "";    //link to image
    this.addIngredient = function(ingredient) {
        this.ingredientList.push(ingredient); //adds an ingredient Object to the ingredients list
    };
    this.printRecipe = function() {
        alert(this.preparation);
        for (var i in ingredientList) {
            i.printIngredient();
        };
    };
};

function initialize() {
    var searedScallops = new recipe;
    searedScallops.preparation = "Clean scallops thoroughly. Mince garlic. Heat pan with a light amount of butter. Cook the scallops and add the garlic. Allow the scallops to cook for three to four minutes, then flip. Cook for an additional three to four minutes. Turn off the heat, salt, and add lemon juice to pan. Serve immediately.";
    var scallop = ingredientObject("scallop", 4, "pieces");
    searedScallops.addIngredient(scallop);
    searedScallops.printRecipe(); //update
};

function pullRecipesFromDatabase() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var string = JSON.parse(xhttp.responseText);

        var article = document.createElement("article");
        document.getElementById("allArticles").appendChild(article);
            var postDateSection = document.createElement("section");
            postDateSection.className = "postDateBorder";
            article.appendChild(postDateSection);
                var postDateTitle = document.createElement("h5");
                postDateTitle.className = "postDateText";
                postDateTitle.innerHTML = string[0].postDate;
                postDateSection.appendChild(postDateTitle);

            var recipeOverviewSection = document.createElement("section");
            recipeOverviewSection.className = "recipeOverview";
            article.appendChild(recipeOverviewSection);
                var recipeOverviewH4 = document.createElement("h4");
                recipeOverviewH4.className = "recipeTitle";
                recipeOverviewH4.innerHTML = string[0].title;
                recipeOverviewSection.appendChild(recipeOverviewH4);
                var recipeOverviewImage = document.createElement("img");
                recipeOverviewImage.className = "recipeImage";
                recipeOverviewImage.src = string[0].recipeImage;
                recipeOverviewSection.appendChild(recipeOverviewImage);
                var recipeOverviewP = document.createElement("p");
                recipeOverviewP.className = "recipeDescription";
                recipeOverviewP.innerHTML = string[0].recipeDescription;
                recipeOverviewSection.appendChild(recipeOverviewP);                
            
            var allIngredientsSection = document.createElement("section");
            allIngredientsSection.className = "allIngredients";
            article.appendChild(allIngredientsSection);
                var ingredientsTitle = document.createElement("h3");
                ingredientsTitle.innerHTML = "Ingredients:";
                allIngredientsSection.appendChild(ingredientsTitle);
            
                for (i = 0; i < string.length; i++) { 
                    if (string[i].detailType == 'ingredient') {
                        var ingredientSection = document.createElement("section");
                        ingredientSection.className = "ingredient";
                        allIngredientsSection.appendChild(ingredientSection);
                            var ingredientImage = document.createElement("img");
                            ingredientImage.className = "ingredientPic";
                            ingredientImage.src = string[i].image;
                            ingredientSection.appendChild(ingredientImage);                        
                            var ingredientDescription = document.createElement("p");
                            ingredientDescription.className = "ingredientDescription";
                            ingredientDescription.innerHTML = string[i].description;
                            ingredientSection.appendChild(ingredientDescription);  
                    }
                }

            var allInstructionsSection = document.createElement("section");
            allInstructionsSection.className = "allInstructions";
            article.appendChild(allInstructionsSection);
                var instructionsTitle = document.createElement("h3");
                instructionsTitle.innerHTML = "Ingredients:";
                allInstructionsSection.appendChild(instructionsTitle);
            
                for (i = 0; i < string.length; i++) { 
                    if (string[i].detailType == 'instruc') {
                        var instructionSection = document.createElement("section");
                        instructionSection.className = "instruction";
                        allInstructionsSection.appendChild(instructionSection);
                            var instructionImage = document.createElement("img");
                            instructionImage.className = "instructionPic";
                            instructionImage.src = string[i].image;
                            instructionSection.appendChild(instructionImage);                        
                            var instructionDescription = document.createElement("p");
                            instructionDescription.className = "instructionDescription";
                            instructionDescription.innerHTML = string[i].description;
                            instructionSection.appendChild(instructionDescription);  
                    }
                }
    }
  };
  xhttp.open("GET", "/database.js", true);
  xhttp.send();
}
