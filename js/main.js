$(function() {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
        .call(function() {
            $('nav').children().removeClass('active');
            $('#firstLink').addClass('active')
          })
        .fromTo(".blue",  1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#secondLink').addClass('active')
          })
        .fromTo(".yellow",  1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#thirdLink').addClass('active')
          })
        .fromTo(".green",   1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#fourthLink').addClass('active')
          }) 
        .fromTo(".red",     1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
        .call(function() {
            $('nav').children().removeClass('active');
            $('#fivethLink').addClass('active')
          });

    var scene = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        // .addIndicators()
        .addTo(controller);

    // controller.scrollTo(function(newpos) {
    //     TweenMax.to(window, 1, {
    //         scrollTo: {
    //         y: newpos
    //         }
    //     });
    // });

    $("header nav a").on('click', function() {
        // console.log('click');
        var targetSection = $(this).attr('href').substring(1);
        var targetPerc = (targetSection - 1) / ($("header nav a").length - 1);
        var targetPos = scene.scrollOffset() + (scene.duration() * targetPerc);
        console.log(targetPos)
        controller.scrollTo(targetPos);
    });
});