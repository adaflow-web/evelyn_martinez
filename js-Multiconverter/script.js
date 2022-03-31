

// Use the window.prompt() function to get inputs from the user as demonstrated in the Tips and Tricks subject.
// Display the conversion results in the browser console.
// The program should not quit as long as the user wants to continue converting values.
// If the user chooses a conversion that is not supported, display that in the console.

// Find at least 3 conversion formulas you want to use with your multiconverter.
// Write a function for each formula.
function moneyConver(euros) {
    userEuros = window.prompt("Entrez la valeur en € à convertir")
    euros = Number(userValue);
    result_money = euros * 1.03;
    message1 = " suisse francs";
    return result_money.toString() + message1;
}

function milesConver(miles) {
    userValue = window.prompt("Entrez la valeur à convertir");
    return miles * 1.61;
    
}

function tempConver(celsius) {
    userValue = window.prompt("Entrez la valeur à convertir");
    return (celsius * 9/5) + 32;
    
}

userOnUse = false

while (userOnUse != true) {
    userInput = window.prompt("Qu'est-ce que vous voulez convertir.(EUROS/MILES/CELSIUS)");
    
    if (userInput == "euros") {
        console.log (moneyConver(euros).toString());
    }
    else if (userInput == "miles") {
        console.log (milesConver(miles).toString());
    }
    else if (userInput == "celsius") {
        console.log (tempConver(celsius));
    }
    else {
        userOnUse = false;
    }
        
}