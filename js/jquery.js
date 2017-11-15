var tgl = -1;

$(document).ready(function () {
    // This will fire when document is ready:
    $(window).resize(function () {
        // This will fire each time the window is resized:

        var $title = $("h1");

        if ($(window).width() >= 1024) {
            $('.nav-bar').show();
            $('.mobileNav').hide();

            $('.projectsList').css({
                "-webkit-flex-direction": 'row',
                "flex-direction": "row"
            });

            $('.projectCard').css({
                "margin-top": "0",
                "width": "512px"
            });

            $title.css({"font-size":"8vw"});

        } else {
            $('.mobileNav').show();
            $('.nav-bar').hide();
            $('.projectsList').css({
                "-webkit-flex-direction": 'column',
                "flex-direction": "column"
            });
            $('.projectCard').css({
                "margin-top": "30px",
                "width": "280px"
            });
            $title.css({"font-size": "50px" });
        }
    }).resize(); // This will simulate a resize to trigger the initial run.


    var $hamburger = $(".hamburger");
    $hamburger.on("click", function() {
        tgl = tgl*-1;
        $hamburger.toggleClass("is-active");

        if(tgl === 1){ //I just made this to toggle showing the menu it was not working with .toggle for some reason
            $('.sideMenu').css({right: '0px'});
            $('main').hide();
        }else{
            $('.sideMenu').css({right: '-250px'});

            $('main').show();
        }
    });
});


//css({"background-color": "yellow", "font-size": "200%"})