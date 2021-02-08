/*
* SI579 001 WN21
* PS3 - Building Reactive JavaScript
* Ruiyang Chang (ruiyangc)
* 02/08/2021
*/

/*
* Excercise 1
* Write a function that changes the text and the color inside the div
*/
// Set up onclick
const divButton = document.getElementById("color-block");
divButton.addEventListener("click", changeColor);
function changeColor(){
    const block = document.getElementById("color-block");
    // Write a condition determine what color it should be changed to
    if (block.className === "red") {
        // Change the background color using JS
        block.setAttribute("class", "blue");
        // Change the text of the color using the span id color-name
        document.getElementById("color-name").textContent = "#ADD8E6";
    }
    else {
        // change the background color using JS
        block.setAttribute("class", "red");
        // Change the text of the color using the span id color-name
        document.getElementById("color-name").textContent = "#F08080";
    }
}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*/
// Set up onclick
const convertButton = document.getElementById("convertbtn");
convertButton.addEventListener("click", convertTemp);
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*/
function convertTemp(){
    let input = document.getElementById("f-input").value;
    // Calculate the temperature here
    let fahr = parseFloat(input);
    let cels = (5/9) * (fahr - 32);
    let converted = Math.round(cels).toString();
    // Send the calculated temperature to HTML
    document.getElementById("c-output").textContent = "≈ " + converted;
}


