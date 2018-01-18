$(function() {
    console.clear();
    console.log("ScrollMagic v%s loaded", ScrollMagic.version);

    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
        .call(function() {
            $('nav').children().removeClass('active');
            $('#firstLink').addClass('active')
          })
        .fromTo(".one",  1, {y: "-100%"}, {y: "0%",  ease: Power4.easeInOut})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#secondLink').addClass('active')
          })
        .fromTo(".two",  1, {x: "-100%"}, {x: "0%",  ease: Power4.easeInOut})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#thirdLink').addClass('active')
          })
        .fromTo(".three",   1, {x:  "100%"}, {x: "0%",  ease: Power4.easeInOut})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#fourthLink').addClass('active')
          }) 
        .fromTo(".four",     1, {y: "100%"}, {y: "0%",  ease: Power4.easeInOut})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#fivethLink').addClass('active')
          });

    var scene = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%",
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        // .addIndicators()
        .addTo(controller);

    controller.scrollTo(function(newpos) {
        console.log('scrol to: ' + newpos)
        TweenMax.to(window, 1, {scrollTo: {y: newpos}});
    });

    $("header nav a").on('click', function() {
        var targetSection = $(this).attr('href').substring(1);
        var targetPerc = (targetSection - 1) / ($("header nav a").length - 1);
        var targetPos = scene.scrollOffset() + (scene.duration() * targetPerc);
        // console.log(targetPos)
        controller.scrollTo(targetPos);
    });

});