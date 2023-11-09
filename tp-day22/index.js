// Hide & Show Proparty

$(document).ready(function(){
    $(".btn1").click(function(){
        $(".paregraph").hide(2000);
    })

    $(".btn2").click(function(){
        $(".paregraph").show(2000);
    })
})

// Btn thi click kari css add karau athava remove karau.

$(document).ready(function(){
    $(".btn1").click(function(){
        $(".paregraph").removeclass(2000);
    })

    $(".btn2").click(function(){
        $(".paregraph").addclass(2000);
    })
}) 

//  Hide & Show Proparty

$(document).ready(function(){
    $(".btn3").click(function(){
        $(".classic").fadeToggle(2000);
        // .fedaToggle , fadeOut , fadeIn
    })
}) 