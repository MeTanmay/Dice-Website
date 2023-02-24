var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
// var one="images/dice1.png";
// var tw0="images/dice2.png";
// var three="images/dice3.png";
// var four="images/dice4.png";
// var five="images/dice5.png";
// var six="images/dice6.png";

// if(randomNumber1==1){
//     link=one;
// }
// else if(randomNumber1==2){
//     link=two;
// }
// else if(randomNumber1==3){
//     link=three;
// }
// else if(randomNumber1==4){
//     link=four;
// }
// else if(randomNumber1==5){
//     link=five;
// }
// else(randomNumber1==6)
// {
//     link=six;
// }

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!";

}
else{
    document.querySelector("h1").innerHTML="Draw!!"; 


}
