//var utilFunctions = {
//    fadeInImages: function () {
//        $(".fade-in-image img:not(.loaded)").on("load", (function () {
//            $(this).addClass("loaded")
//        })).each((function () {
//            this.complete && $(this).load()
//        }))
//    },
//    formatDataCurrency: function () {
//        $("[data-currency]:not('.currency-initialized')").each((function () {
//            var e = $(this).data("currency");
//            e ? e == resources.country.currency_code ? $(this).prepend(resources.country.currency_symbol) : $(this).hide() : ($(this).prepend(resources.country.currency_symbol), $(this).addClass("currency-initialized"))
//        }))
//    },
//    formatNumber: function () {
//        $("[data-number-format]:not('.number-format-initialized')").each((function () {
//            var e, t, a, n, o = $(this),
//                i = o.text().trim();
//            o.attr("data-number-original-val", i), i && !isNaN(i) && (i = 1 < i.split(".").length ? (e = i.split(".")[0], t = i.split(".")[1], Math.ceil(parseInt(e)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + t) : Math.ceil(parseInt(i)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), void 0 !== o.attr("data-shorten") && (t = i.split(".")[1], n = "", 2 == (a = i.split(",")).length ? n = "k" : 3 == a.length ? n = "M" : 4 == a.length && (n = "B"), i = a[0] + n), void 0 !== o.attr("data-money") && (i = resources.country.currency_symbol + i), o.text(i).addClass("number-format-initialized"))
//        }))
//    },
//    numFormatter: function (e) {
//        return 999 < e && e < 1e6 ? (e / 1e3).toFixed(0) : 1e6 < e ? (e / 1e6).toFixed(1) : e < 900 ? e : void 0
//    }
//};
//utilFunctions.fadeInImages(),
    
    $(document).ready((function () {
    //lozad().observe(), objectFitImages && objectFitImages(),
        $(".hamburger").click((function () {
            $("body").toggleClass("mobile-menu-open")
        })),
        $(window).on("scroll", $.throttle(500, (function () {
        var e = $(".main-header"),
            t = $(".mobile-header ");
        $(".main-header").hasClass("has-shadow") && 0 == $(window).scrollTop() ? (e.removeClass("has-shadow"), t.removeClass("has-shadow")) : (e.addClass("has-shadow"), t.addClass("has-shadow"))
    })))
}));
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".mobile-header").addClass("has-shadow");
    } else {
    $(".mobile-header").removeClass("has-shadow");
    }
});
//var waitingForNewsletterForm = setInterval((function () {
//    1 <= $("#hs_form_target_newsletter form").length && (clearInterval(waitingForNewsletterForm), $(".newsletter-wrapper .hs_email .input").append('<button><span>SUBSCRIBE</span><span class="arrow-button"> <img src="https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/Global-Assets/Right-1.svg" alt="subscribe newsletter"/> </span></button>'), $("#hs_form_target_newsletter form").on("submit", (function () {
//        var a = setInterval((function () {
//            var e, t;
//            0 < $("#hs_form_target_newsletter.submitted-message").length && (clearInterval(a), t = (e = $("#hs_form_target_newsletter p")).text(), e.html(t), e.addClass("show"), setTimeout((function () {
//                e.addClass("fadeIn")
//            }), 0))
//        }), 100)
//    })), 0 < $(".newsletter-wrapper ul.inputs-list li").find("input[type='radio']").length && $(".newsletter-wrapper ul.inputs-list li").each((function () {
//        var e = $(this).find("input[type='radio']").is(":checked");
//        "radio" === $(this).attr("role") && (e ? $(this).attr("aria-checked", "true") : $(this).attr("aria-checked", "false"))
//    })))
//}), 100);
//(0 < $(".main-footer .footer-menu ul").length && 0 < $(".main-header .header-menu ul").length || 0 < $(".mobile-menu .header-menu ul").length && 0 < $(".mobile-menu .footer-menu ul").length || 0 < $(".main-content #sitemap ul").length) && $(".main-footer .footer-menu ul li, .main-header .header-menu ul, .mobile-menu .header-menu ul, .mobile-menu .footer-menu ul, .main-content #sitemap ul").find("a").each((function () {
//    "menuitem" === $(this).attr("role") && ($(this).parents("ul").attr("role", "menu"), $(this).parents("li").attr("role", "none"))
//})), $("#hs_form_target_newsletter").on("hsvalidatedsubmit", ".hs-form", (function (e) {
//    $(e.target).find("[name=email]").val(), ga("send", "event", "Newsletter", "submit", "Newsletter Subscription")
//})), $(document).on("click", (function (e) {
//    0 === $(e.target).closest("#hs-eu-cookie-confirmation-inner").length && $("#hs-eu-cookie-confirmation").is(":visible") && $("#hs-eu-confirmation-button")[0].click()
//})).on("click", "#hs-eu-confirmation-button", (function () {
//    -1 === window.location.origin.indexOf("sandbox") && ga("send", "event", "Cookie Acceptance", "submit", "Accept Cookie")
//})).on("click", "#hs-eu-decline-button", (function () {
//    -1 === window.location.origin.indexOf("sandbox") && ga("send", "event", "Cookie Non-Acceptance", "submit", "Close Cookie")
//})), 
$(document).ready((function () {
    function e() {
        $(this).parent().addClass("alt-image");
        var e = $(this),
            t = e.data("alt-src");
        e.data("alt-src", e.attr("src")), e.attr("src", t).addClass("altImage"), e.on("mouseout", (function () {
            e.removeClass("altImage"), e.parent().removeClass("alt-image")
        }))
    }
    $((function () {
        $("#campaign-types-section .column").find("img").hover(e)
    })), $(".animated-counter .counter").each((function () {
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
    })), $(".parallax-box").each((function () {
        var s = $(this),
            l = $(this).parent();

        function e() {
            var e, t, a, n, o, i, r;
            $(window).width() < 980 ? s.css({
                transform: "translate(0,0)"
            }) : (e = s.data("speed"), t = l.offset().top, a = $(this).scrollTop(), n = $(this).height(), o = l.innerHeight(), t < (i = a + n) && a < t + o && (r = (i - t) * e / (n + o) * 100 + (50 - 50 * e)), s.css({
                top: 1.8 * r - 87 + "%"
            }))
        }
        $(document).on({
            scroll: $.debounce(1, (function () {
                e()
            })),
            ready: $.debounce(1, (function () {
                e()
            }))
        })
    })), $("#hs_cos_wrapper_featured-image-slider").slick({
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
    })), $("#hs_cos_wrapper_module_1594277550142106 .testimonial-slide").each((function () {
        var e = $(this).find(".control-image").html();
        t.push($("<div>").append(e))
    })), $("#testimonial-slider-control").html(t);
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
    }), $("#hs_cos_wrapper_module_1594277550142106").slick({
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
    }), $("#testimonial-slider-control").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: !1,
        asNavFor: a,
        dots: !1,
        centerMode: !1,
        focusOnSelect: !0,
        prevArrow: !1,
        nextArrow: !1
    }), $("#hs_cos_wrapper_benefits-cards > div.hs_cos_wrapper").each((function (e, t) {
        $(t).addClass("col-lg-6")
    }))
}));




jQuery(document).ready(function ($) {
    /* ===== Logic for creating styled Select Boxes ===== */
    $('.select-container').each(function () {
        $(this).children('select').css('display', 'none');
        var $current = $(this);
        $(this).find('option').each(function (i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class').replace(/sel/g, 'sel__box')
                }));
                var placeholder = $(this).text();
                $current.prepend($('<span>', {
                    class: $current.attr('class').replace(/sel/g, 'sel__placeholder')
                    , text: placeholder
                    , 'data-placeholder': placeholder
                }));
                return;
            }
            $current.children('div').append($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box__options')
                , text: $(this).text()
            }));
        });
    });
    // Toggling the `.active` state on the `.sel`.
    $('.sel').click(function () {
        $(this).siblings('.sel').removeClass('active');
        $(this).toggleClass('active');
    });
    // Toggling the `.selected` state on the options.
    $('.sel__box__options').click(function () {
        var txt = $(this).text();
        var index = $(this).index();
        $(this).siblings('.sel__box__options').removeClass('selected');
        $(this).addClass('selected');
        var $currentSel = $(this).closest('.sel');
        $currentSel.children('.sel__placeholder').text(txt);
        $currentSel.children('select').prop('selectedIndex', index + 1);
    });
    });