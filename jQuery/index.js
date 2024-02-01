// $("h1").css("color","green");
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// alert($("h1").hasClass("big-title"));

// $("h1").text("Hey Tanmay!");
// $("h1").html("<em> Hey Dear </em>");

// $("img").attr("src", "https://wallpapercave.com/wp/wp6293261.jpg");


// ----Adding Event Listners-----

// $("h1").click(function(){
//     $("h1").css("color","yellow")
//     // $("h1").addClass("big-title")
// });

// $("button").click(function(){
//     $("h1").css("color","red")
//     // $("h1").addClass("big-title")
// });

// $("input").keydown(function(event){
//     console.log(event.key)
// });

// $(document).keydown(function(event){
//     console.log(event.key)
//     $("h1").text(event.key)
// });

// $("h1").on("mouseover",function(){
//     $("h1").css("color","yellow")
// });

// $("h1").after("<button>ABCD</button>");
// $("h1").append("<button>PQRS</button>");         after berfore append prepend

// $("button").click(function(){
//     $("h1").hide();
//     //toogle  show    fadeOut   fadeIn  fadeToggle  slideUp    slideDown    slideToggle 

// });

// $("button").click(function(){
//     $("h1").animate({opacity: 0.5});
// });

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

