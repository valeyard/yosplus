window.SA || (SA = {});
SA.timg = new function(e, f, a) {
    var g = this,
        i = function(c, f) {
            var b = a(this).siblings("img"),
                h, d;
            if (b.attr("t_width")) a(this).removeClass("expanded"), b.attr({
                width: b.attr("t_width"),
                height: b.attr("t_height")
            }), b.removeAttr("t_width"), b.removeAttr("t_height");
            else {
                a(this).addClass("expanded");
                b.attr({
                    t_width: b.attr("width"),
                    t_height: b.attr("height")
                });
                var g = b.parents("blockquote");
                g.length || (g = b.parents(".postbody"));
                h = parseInt(b.attr("o_width"), 10);
                d = parseInt(b.attr("o_height"), 10);
                g = Math.min(900, g.width());
                if (f && h > g) {
                    var i = b.position(),
                        g = (g - 3 * i.left) / h;
                    b.attr("width", h * g);
                    b.attr("height", d * g)
                } else b.removeAttr("width"), b.removeAttr("height");
                g = a.browser.webkit || a.browser.safari ? "body" : "html";
                d = a(g).scrollTop();
                h = b.offset().top;
                b = h + b.height();
                b - d > a(e).height() && (d = b - a(e).height());
                h < d && (d = h);
                d != a(g).scrollTop() && (a.browser.msie && 7 > parseInt(a.browser.version, 10) ? a(g).scrollTop(d) : a(g).animate({
                    scrollTop: d
                }, 150))
            }
            return !1
        },
        k = function() {
            var c = a(this);
            if (c.hasClass("loading")) {
                c.removeClass("loading");
                var e =
                    c[0].naturalWidth || c.width(),
                    b = c[0].naturalHeight || c.height();
                if (200 > b && 500 >= e || 170 > e) c.removeClass("timg");
                else {
                    c.addClass("complete");
                    c.attr({
                        o_width: e,
                        o_height: b
                    });
                    var e = e + "x" + b,
                        b = 1,
                        h = c[0].naturalWidth || c.width(),
                        d = c[0].naturalHeight || c.height();
                    170 < h && (b = 170 / h);
                    200 < d * b && (b = 200 / d);
                    c.attr({
                        width: h * b,
                        height: d * b
                    });
                    var b = a('<span class="timg_container"></span>'),
                        f = a('<div class="note"></div>');
                    f.text(e);
                    f.attr("title", "Click to toggle");
                    b.append(f);
                    c.before(b);
                    b.prepend(c);
                    f.click(i);
                    b.click(function(c) {
                        if (1 ===
                            c.which || a.browser.msie && 9 > parseInt(a.browser.version, 10) && 0 === c.which) return i.call(f, c, !0), !1
                    })
                }
                c.trigger("timg.loaded")
            }
        };
    g.scan = function(c) {
        a(c).find("img.timg").each(function(c, b) {
            b = a(b);
            b.hasClass("complete") || (b.addClass("loading"), b[0].complete || null !== b[0].naturalWidth && 0 < b[0].naturalWidth ? k.call(b) : b.load(k))
        })
    };
    a(f).ready(function() {
        g.scan("body")
    });
    a(e).load(function() {
        var c = a("img.timg.loading");
        c.length && c.each(function(a, c) {
            k.call(c)
        })
    })
}(window, document, jQuery);