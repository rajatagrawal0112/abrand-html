$(document).ready((function () {
    $(".hamburger").click((function () {
        $("body").toggleClass("mobile-menu-open")
    }))

}));
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".mobile-header").addClass("has-shadow");
    } else {
        $(".mobile-header").removeClass("has-shadow");
    }
});

$(document).ready((function () {
    $(".animated-counter .counter").each((function () {
        var e = $(this),
            t = e.data("value").toString().replace(/,/g, "");
        e.html("<div class='displayed-value'>"), void 0 !== e.attr("data-currency") && e.before("<div class='prefix'>" + resources.country.currency_symbol);
        var a, n = "";
        void 0 !== e.attr("data-shorten") ? (2 == (a = (15e5 <= t ? utilFunctions.numFormatter(t).toString() : Math.ceil(parseInt(t)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).split(",")).length ? n = "k" : 3 == a.length || 1 == a.length ? n = "M" : 4 == a.length && (n = "B"), t = a[0]) : void 0 !== e.attr("data-long-suffix") && (n = "+"), n && e.after("<div class='suffix'>" + n + "</div>");
        var o = 1 <= t ? "10 - " + (t - 50) : t - 50,
            i = new Odometer({
                el: e.find(".displayed-value")[0],
                value: o,
                format: "(,ddd)",
                theme: "default"
            });
        e.appear((function () {
            i.update(t)
        }))
    }));
    //    $(".parallax-box").each((function () {
    //        
    //        var s = $(this),
    //            l = $(this).parent();
    //
    //        function e() {
    //            var e, t, a, n, o, i, r;
    //            $(window).width() < 980 ? s.css({
    //                transform: "translate(0,0)"
    //            }) : (e = s.data("speed"), t = l.offset().top, a = $(this).scrollTop(), n = $(this).height(), o = l.innerHeight(), t < (i = a + n) && a < t + o && (r = (i - t) * e / (n + o) * 100 + (50 - 50 * e)), s.css({
    //                top: 1.8 * r - 87 + "%"
    //            }))
    //        }
    //        
    //        $(document).on({
    //            scroll: $.debounce(1, (function () {
    //                e()
    //            })),
    //            ready: $.debounce(1, (function () {
    //                e()
    //            }))
    //        })
    //    }));

    $("#hs_cos_wrapper_featured-image-slider").slick({
        dots: !1,
        infinite: !0,
        speed: 500,
        fade: !0,
        cssEase: "linear",
        prevArrow: !1,
        nextArrow: !1,
        autoplay: !0,
        autoplaySpeed: 5e3
    });

    var t = [];
    $("#hs_cos_wrapper_testimonial-slider .testimonial-slide").each((function () {
        var e = $(this).find(".control-image").html();
        t.push($("<div>").append(e))
    }));

    $("#hs_cos_wrapper_module_1594277550142106 .testimonial-slide").each((function () {
        var e = $(this).find(".control-image").html();
        t.push($("<div>").append(e))
    }));

    $("#testimonial-slider-control").html(t);

    var a = 0 !== $("#hs_cos_wrapper_module_1594277550142106").length ? "#hs_cos_wrapper_module_1594277550142106" : "#hs_cos_wrapper_testimonial-slider";

    $("#hs_cos_wrapper_testimonial-slider").slick({
        dots: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: !0,
        cssEase: "linear",
        infinite: !1,
        prevArrow: !1,
        nextArrow: !1,
        draggable: !1,
        asNavFor: "#testimonial-slider-control"
    });

    $("#hs_cos_wrapper_module_1594277550142106").slick({
        dots: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: !0,
        cssEase: "linear",
        infinite: !1,
        prevArrow: !1,
        nextArrow: !1,
        draggable: !1,
        asNavFor: "#testimonial-slider-control"
    });

    $("#testimonial-slider-control").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: !1,
        asNavFor: a,
        dots: !1,
        centerMode: !1,
        focusOnSelect: !0,
        prevArrow: !1,
        nextArrow: !1
    });

    $("#hs_cos_wrapper_benefits-cards > div.hs_cos_wrapper").each((function (e, t) {
        $(t).addClass("col-lg-6")
    }))
}));




jQuery(document).ready(function ($) {
    /* ===== Logic for creating styled Select Boxes ===== */
    $('.select-field').each(function () {
        $(this).children('select').css('display', 'none');
        var $current = $(this);
        $(this).find('option').each(function (i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class').replace(/select-field/g, 'select-box')
                }));
                var placeholder = $(this).text();
                $current.prepend($('<span>', {
                    class: $current.attr('class').replace(/select-field/g, 'select-placeholder'),
                    text: placeholder,
                    'data-placeholder': placeholder
                }));
                return;
            }
            $current.children('div').append($('<div>', {
                class: $current.attr('class').replace(/select-field/g, 'select-box-option'),
                text: $(this).text()
            }));
        });
    });
    $('.select-box').hide();
    // Toggling the `.active` state on the `.sel`.slideToggle
    $('.select-field').click(function () {
        $(this).siblings('.select-field').removeClass('active');
        $(this).toggleClass('active');
        $(this).find('.select-box').slideToggle();
    });
    // Toggling the `.selected` state on the options.
    $('.select-box-option').click(function () {
        var txt = $(this).text();
        var index = $(this).index();
        $(this).siblings('.select-box__options').removeClass('selected');
        $(this).addClass('selected');
        var $currentSel = $(this).closest('.select-field');
        $currentSel.children('.select-placeholder').text(txt);
        $currentSel.children('select').prop('selectedIndex', index + 1);
    });
});


$(document).ready((function () {
    $(".collapse").on("show.bs.collapse", (function () {
        var t = $(this).attr("aria-labelledby");
        $(this).siblings(".card-header").find("button").addClass("active");
        $(".accordion-tab-pane").each((function (e, a) {
            $(this).attr("aria-labelledby") === t ? $(this).addClass("show active") : $(this).removeClass("show active")
        }))
    }));
    //    $(".collapse").on("hide.bs.collapse", (function () {
    //        $(this).siblings(".card-header").find("button").removeClass("active")
    //    }));
    $(".accordion .card-header button").each((function (e, a) {
        $(this).on("click", (function () {
            var e = "#" + $(this).attr("aria-controls");
            //$(".collapse").addClass("show")
            $(e).collapse("show")
        }))
    }));
}));



const divCount = 3
$(document).ready(() => {
    let activeSlide = 0
    setInterval(() => {
        let lastSlide = activeSlide - 1
        $(".slide").removeClass('active').removeClass('exiting')
        $(".slide:eq(" + lastSlide + ")").addClass('exiting')
        $(".slide:eq(" + activeSlide + ")").addClass("active")
        if (activeSlide < divCount - 1) {
            activeSlide++
            return
        }
        activeSlide = 0;
    }, 4000)

})
