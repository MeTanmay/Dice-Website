// This is basic information about event listners in javascript;



// // document.querySelector("button").addEventListener("click", function(){
// //     alert("I got clicked");
// // }); 

// var noOfButtons=document.querySelectorAll(".drum").length;

// for(var i=0;i<noOfButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("I got clicked");
//     }); 
    
// }
// // function handleClick(){
// //     alert("I got clicked")

// // }



var noOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml=this.innerHTML;

        buttonAnimation(buttonInnerHtml);
        makeSound(buttonInnerHtml);
        
    }); 
}

document.addEventListener("keydown", function(event){
    buttonAnimation(event.key);
    makeSound(event.key);
})

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;


        case "l":
            var kick = new Audio('sounds/kick.mp3');
            kick.play();
            break;

    
        default:
            console.log(key);
            break;
    }

}

function buttonAnimation(current_key){
    var activeButton= document.querySelector("." + current_key);

    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}


