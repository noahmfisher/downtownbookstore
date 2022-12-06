$(document).ready(function(){

    $("#clickOne").click(function(){
        $("#introOne").toggle(); // off
        $("#introTwo").toggle(); // on
        $(".bg").toggle(); // on

        $("#clickOne").toggle();
        $("#clickTwo").toggle();
    }); 

    $("#clickTwo").click(function(){
        $("#introTwo").toggle(); // off
        $("#introThree").toggle(); // on
        $(".bg").addClass("bgTwo");

        $("#clickTwo").toggle();
        $("#clickThree").toggle();

        $(".logo").toggle();
    }); 

    $("#clickThree").click(function(){
        $("#clickThree").toggle(); // off
    }); 

});