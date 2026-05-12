$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")
    
    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible")
    } else {  $(tag).removeClass("visible")
    }
    }
})

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadeUp")
    
    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible")
    } else {  $(tag).removeClass("visible")
    }
    }
})

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadeUpDelayed")
    
    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible")
    } else {  $(tag).removeClass("visible")
    }
    }
})


var header = $(".sticky");
var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('mobile-nav');
    } else {
        header.removeClass("mobile-nav");
    }
});

