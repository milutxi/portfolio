$ (function() {

    $(".my-data").append($("<div class='myEmail'>").text("aliaga_sheila@hotmail.com"));
    $(".my-data").append($("<div class='myMobile'>").text("0700 61 60 24"));

    $(".my-name").text("Sheila Aliaga");

    $(".nav-item").on({
        mouseenter: function () {
            $(this).addClass("active");
        
            $(this).find(".submenu").toggle(1000);
            
        },
        mouseleave: function () {
            $(this).removeClass("active");
            $(this).find(".submenu").toggle(1000);

        },
        click: function () {
            $(this).find(".submenu-item").slidetoggle();
          //  $(this).find(".submenu").toggle();
        }

    })
    



    $(".mobile").on({
        click: function() {
            $(".mo-wrap").show();
        }
    })

    $("#close").on ({
        click: function() {
            $(".mo-wrap").hide();
        }
    })

    $(".navigation-item").on({
        mouseenter: function() {
            $(this).toggleClass("mobileActive");
        },
        mouseleave: function () {
            $(this).toggleClass("mobileActive");
        },
        click: function () {
            $(this).siblings().find(".moSubmenuItem").hide();
            $(this).find(".moSubmenuItem").toggle();
        }

    })

    

    




})
   
