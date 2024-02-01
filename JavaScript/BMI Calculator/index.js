const prompt = require("prompt-sync")();

function bmiCalculator(weight, height){
    var bmi=weight/(height*height);
    return bmi;
}

let weight=prompt("Enter your Weight");
let height=prompt("Enter your height");

console.log(bmiCalculator(weight,height));