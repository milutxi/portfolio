$(function() {

    $(".show-more").on("click", function() {
      
        $(this).prev("p").slideToggle();

        if( $(this).text() === "Show more") {
            $(this).text("Show less")
        }else{
            $(this).text("Show more")
        }

    })


})