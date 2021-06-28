$(".animated-counter .counter").each(function () {
    var e = $(this),
        a = e.data("value").toString().replace(/,/g, "");
    if (e.html("<div class='displayed-value'>"), void 0 !== e.attr("data-currency") && e.before("<div class='prefix'>" + resources.country.currency_symbol), void 0 !== e.attr("data-shorten")) {
        var t = Math.ceil(parseInt(a)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").split(",");
        2 == t.length ? suffix = "k" : 3 == t.length ? suffix = "M" : 4 == t.length && (suffix = "B"), a = t[0], suffix && e.after("<div class='suffix'>" + suffix + "</div>")
    }
    var r = new Odometer({
        el: e.find(".displayed-value")[0],
        value: a - 50,
        format: "(,ddd)",
        theme: "default"
    });
    e.appear(function () {
        r.update(a)
    })
});
