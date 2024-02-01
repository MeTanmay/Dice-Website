var randomNumber1=Math.floor(Math.random()*3)+1;
var randomNumber2=Math.floor(Math.random()*3)+1;

document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber2+".png");



if (randomNumber1===1 && randomNumber2===2){
    document.querySelector("h1").innerHTML="PLayer2 Wins!";
}
else if (randomNumber1===1 && randomNumber2===3){
    document.querySelector("h1").innerHTML="PLayer1 Wins!";
}
else if (randomNumber1===2 && randomNumber2===1){
    document.querySelector("h1").innerHTML="PLayer1 Wins!";
}
else if (randomNumber1===2 && randomNumber2===3){
    document.querySelector("h1").innerHTML="PLayer2 Wins!";
}
else if (randomNumber1===3 && randomNumber2===1){
    document.querySelector("h1").innerHTML="PLayer2 Wins!";
}
else if (randomNumber1===3 && randomNumber2===2){
    document.querySelector("h1").innerHTML="PLayer1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
