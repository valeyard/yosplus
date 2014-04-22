jQuery.cookie = function (e, f, a) {
    if ("undefined" != typeof f) {
        a = a || {};
        null === f && (f = "", a.expires = -1);
        var g = "";
        if (a.expires && ("number" == typeof a.expires || a.expires.toUTCString)) "number" == typeof a.expires ? (g = new Date, g.setTime(g.getTime() + 864E5 * a.expires)) : g = a.expires, g = "; expires=" + g.toUTCString();
        var i = a.path ? "; path=" + a.path : "",
            k = a.domain ? "; domain=" + a.domain : "",
            a = a.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(f), g, i, k, a].join("")
    } else {
        f = null;
        if (document.cookie && "" != document.cookie) {
            a =
                document.cookie.split(";");
            for (g = 0; g < a.length; g++)
                if (i = jQuery.trim(a[g]), i.substring(0, e.length + 1) == e + "=") {
                    f = decodeURIComponent(i.substring(e.length + 1));
                    break
                }
        }
        return f
    }
};
window.SA || (SA = {});
SA.utils = new function (e, f, a) {
    var g = this;
    g.storageEnabled = e.localStorage ? !0 : !1;
    g.isMobile = /android|iphone|ipod|ipad|webos|blackberry/i.test(navigator.userAgent);
    g.store = function (a) {
        if (g.storageEnabled && null !== a) {
            var e = null;
            if (1 < arguments.length) e = arguments[1], null === e ? localStorage.removeItem(a) : localStorage.setItem(a, JSON.stringify(e));
            else if (e = localStorage.getItem(a), null !== e) return JSON.parse(e)
        }
        return null
    };
    g.qs = function (a) {
        if (a) {
            var g = [],
                d;
            for (d in a) g.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]));
            return g.join("&")
        }
        a = {};
        if (g = e.location.search)
            for (var g = g.substr(1).split("&"), j = 0; j < g.length; j++) d = g[j].indexOf("="), -1 == d ? a[g[j]] = "" : a[decodeURIComponent(g[j].substr(0, d))] = decodeURIComponent(g[j].substr(d + 1));
        return a
    };
    e.rf = function (e) {
        a("td.postbody iframe").css("height", Math.min(e, 800))
    }
}(window, document, jQuery);
new function (e, f, a) {
    var g = a.browser.webkit || a.browser.safari ? "body" : "html",
        i, k = 0,
        d = 0,
        j = function (a) {
            var d = Math.floor(160 * Math.random()) + 1;
            return "http://fi.somethingawful.com/sideimages/" + a + "88/" + d + ".jpg"
        }, b = function () {
            i.offset();
            var b = a(g).scrollTop(),
                h = {
                    position: "absolute",
                    top: k
                }, e = a("div#content"),
                j = e.offset().top,
                e = e.height(),
                j = j + e - d;
            b > j ? e > d && (h.top = j) : b >= k && (a.browser.msie && 7 > parseInt(a.browser.version, 10) ? h.top = b : (h.position = "fixed", h.top = 0));
            i.css(h)
        };
    a(f).ready(function () {
        var c = a("div.oma_pal"),
            h = a(new Image);
        h.attr({
            width: 88,
            height: 88,
            "class": "omapalpet"
        });
        h.css("display", "block");
        c.each(function (d, b) {
            var b = a(b),
                c = h.clone();
            c.addClass("left");
            c.attr("src", j("l"));
            b.prepend(c);
            c = h.clone();
            c.addClass("right");
            c.attr("src", j("r"));
            b.append(c)
        });
        i = a("div#unregskyscraper");
        i.length && (k = i.offset().top - 10, d = i.height() + 10, a(e).scroll(b));
        a("iframe.adframe").each(function (d, b) {
            a(b).attr("src", "/adframe.php?z=" + a(b).attr("data-zone"))
        })
    })
}(window, document, jQuery);

function newposts(e) {
    window.location.href = "/showthread.php?goto=newpost&threadid=" + e
}

function validate_pm(e, f) {
    return "" == e.message.value || "" == e.touser.value ? (alert("Please complete the recipient and message fields."), !1) : 0 != f && e.message.value.length > f / 2 ? (alert("Your message is too long.\n\nReduce your message to " + f / 2 + " characters.\nIt is currently " + e.message.value.length + " characters long."), !1) : !0
}

function confirm_newpm() {
    input_box = confirm("You have a new private message. Click OK to view it, or cancel to hide this prompt.");
    !0 == input_box && (second_box = confirm("Open in new window?\n\n(Press cancel to open in the current window.)"), !0 == second_box ? window.open("private.php", "pmnew") : window.location = "private.php")
}

function posticon_sel(e) {
    document.vbform.iconid.item(e).checked = !0
}

function validate(e, f) {
    if (e.elements.namedItem("subject") && "" == e.subject.value) return alert("Please complete the subject field, shithead."), !1;
    var a = e.elements.namedItem("message");
    return a && "" == e.message.value ? (alert("Please complete the message field, shithead."), !1) : 0 != f && a.length > f ? (alert("Your message is too long.\n\nReduce your message to " + f + " characters.\nIt is currently " + e.message.value.length + " characters long.\n  Are you trying to spam?\n  If so, then STOP!"), !1) : !0
}

function checklength(e, f) {
    f || (f = 0);
    message = 0 != f ? "\nThe maximum permitted length is " + f + " characters." : "";
    alert("Your message is " + e.message.value.length + " characters long." + message)
}

function rate_thread(e) {
    document.rateform.vote.value = e;
    document.rateform.submit()
}

function reloadCaptcha() {
    document.images.captcha.src = "captcha.php?" + Math.random()
}
$(document).ready(function () {
    var e = $("#thread table.post");
    $(e).each(function (a, e) {
        try {
            var f = $(e).find("td.userinfo").get(0),
                k = f.className.match(/\buserid\-(\d+)\b/)[1];
            $(f).data("userid", k);
            var d = e.id.match(/\bpost(\d+)\b/)[1];
            $(e).data({
                userid: k,
                postid: d
            });
            var j = $(e).find("tr td.postlinks ul.profilelinks"),
                b = 3 <= j.find("li").length ? 2 : 1;
            $(j).find("li:eq(" + b + ")", j).after('\n<li><a href="/banlist.php?userid=' + k + '">Rap Sheet</a></li>')
        } catch (c) {}
    });
    var f = RegExp(/^\(USER WAS (?:BANNED|PUT ON PROBATION) FOR THIS POST\)$/);
    $(e).each(function (a, e) {
        try {
            $(e).find("td.postbody > b:last").filter(function (a, d) {
                return !!$(d).text().match(f)
            }).wrapInner('<a href="/banlist.php?userid=' + $(e).data("userid") + '" />')
        } catch (i) {}
    });
    $("td.postbody .cancerous").closest("td").hover(function () {
        $(".cancerous", this).addClass("hover")
    }, function () {
        $(".cancerous", this).removeClass("hover")
    })
});

function add_whoposted_links() {
    $("#forum.threadlist tr.thread").each(function (e, f) {
        try {
            var a = f.id.match(/^thread(\d+)$/)[1];
            $("td.replies", f).wrapInner('<a href="/misc.php?action=whoposted&amp;threadid=' + a + '" target="_blank" title="List users that posted in this thread" />')
        } catch (g) {}
    })
}
new function (e, f, a) {
    var g = [],
        i = /thread(\d+)/i;
    a(new Image).attr("src", "http://fi.somethingawful.com/style/bookmarks/star-off.gif");
    a(new Image).attr("src", "http://fi.somethingawful.com/style/bookmarks/spin3.gif");
    for (var k = 0; 3 > k; k++) g.push(a(new Image).attr("src", "http://fi.somethingawful.com/style/bookmarks/star" + k + ".gif"));
    a(f).ready(function () {
        var d = a("tr.thread td.star");
        d.length && d.each(function (d, b) {
            var b = a(b),
                c = b.append("<div></div>"),
                h = b.parents("tr").eq(0),
                j = i.exec(h.attr("id"));
            if (j) {
                j =
                    j[1];
                c.click(function () {
                    var b = a(this);
                    if (h.hasClass("spin")) return !1;
                    h.addClass("spin");
                    h.removeClass("category0 category1 category2");
                    b.removeClass("bm0 bm1 bm2");
                    a.post("/bookmarkthreads.php", {
                        threadid: j,
                        action: "cat_toggle",
                        json: 1
                    }, function (a) {
                        0 <= a.category_id && !e.disable_thread_coloring && h.addClass("category" + a.category_id);
                        h.removeClass("spin");
                        b.addClass("bm" + a.category_id)
                    });
                    return !1
                });
                var g = h.find("div.lastseen"),
                    f = g.find("a.x");
                f.click(function () {
                    if (f.data("busy")) return !1;
                    f.data("busy", !0);
                    f.html("<");
                    a.post("/showthread.php", {
                        threadid: j,
                        action: "resetseen",
                        json: 1
                    }, function (a) {
                        a.threadid && (h.removeClass("seen"), g.remove())
                    });
                    return !1
                })
            }
        });
        var j = !1,
            b = a("div#bookmark_link a"),
            c = a("img.thread_bookmark");
        if (b.length && c.length) {
            var h = parseInt(a("body").attr("data-thread"), 10),
                g = function () {
                    c.hasClass("unbookmark") ? b.html("Unbookmark this thread") : b.html("Bookmark this thread")
                }, f = function () {
                    c.hasClass("bookmark") ? c.attr({
                        src: "http://fi.somethingawful.com/images/buttons/button-bookmark.png",
                        alt: "Bookmark",
                        title: "Bookmark thread"
                    }) : c.attr({
                        src: "http://fi.somethingawful.com/images/buttons/button-unbookmark.png",
                        alt: "Unbookmark",
                        title: "Unbookmark thread"
                    })
                }, d = function () {
                    if (j) return !1;
                    j = !0;
                    var b = {
                        action: c.hasClass("unbookmark") ? "remove" : "add",
                        threadid: h,
                        json: 1
                    };
                    a.post("/bookmarkthreads.php", b, function (a) {
                        c.removeClass("bookmark unbookmark");
                        a.bookmarked ? c.addClass("unbookmark") : c.addClass("bookmark");
                        f();
                        g();
                        j = !1
                    })
                };
            c.click(d);
            b.click(d);
            f();
            g()
        }
        if (a("body").hasClass("usercp") || a("body").hasClass("bookmark_threads")) d =
            a("table#forum"), d.length && (d.find("thead > tr").append("<th></th>"), d.find("tbody > tr").append('<td class="button_remove"><div title="Remove bookmark"></div></td>'), d.delegate("td.button_remove div", "click", function () {
                var b = a(this),
                    d = b.parents("tr").eq(0),
                    c = i.exec(d.attr("id"));
                if (c) {
                    c = c[1];
                    if (b.data("pending")) return !1;
                    b.data("pending", !0);
                    b.removeClass("warn");
                    b.addClass("spin");
                    a.post("/bookmarkthreads.php", {
                        threadid: c,
                        action: "remove",
                        json: 1
                    }, function () {
                        d.remove()
                    })
                }
                return !1
            }))
    })
}(window, document,
    jQuery);
new function (e, f, a) {
    a(f).ready(function () {
        var e = a("div.threadrate"),
            f = "THANK GOD YOU VOTED!;Just the vote we were looking for.;You're a real gem.;Thanks toots.;*beep boop* vote accepted *bzzt*;We threw your vote into the pile.;Thank you, citizen!;That was the best vote I have ever seen.;That was a really good vote.;Vote accepted!  Thanks a lot!;Vot acepteed^ thinks aot;Thanks champ!".split(";");
        if (e.length) {
            var k = parseInt(a("body").attr("data-thread"), 10);
            0 >= k || isNaN(k) || e.delegate("ul.rating_buttons li", "click",
                function () {
                    var d = a(this).index() + 1;
                    a.post("/threadrate.php", {
                        threadid: k,
                        vote: d
                    }, function () {
                        e.html(f[Math.floor(Math.random() * f.length)])
                    })
                })
        }
    })
}(window, document, jQuery);
new function (e, f, a) {
    var g = "_sessl",
        g = g + "",
        i = function (a) {
            return parseInt(a, 10) + 0
        }, k = function (a) {
            for (var a = a.substr(1).split("&"), e = 0, b, c = {}, h = a.length, f; e < h; e++) b = a[e].indexOf("="), -1 != b && (f = a[e].substr(0, b), b = a[e].substr(b + 1), c[f] = b);
            return c
        };
    a(f).ready(function () {
        if (a("div#notregistered").length) {
            a("table#forum th a").each(function (b, d) {
                a(d).replaceWith(d.childNodes)
            });
            a("ul.postbuttons img#button_bookmark").parent().remove();
            var d = e.location.search;
            if (d) {
                var f = k(d),
                    b = d = 0,
                    c = 0;
                if (f.hasOwnProperty("forumid")) d =
                    i(f.forumid);
                else {
                    var h = a('div.breadcrumbs a[href^="forumdisplay.php"]').last();
                    h.length && (h = h.attr("href"), h = k(h.substr(h.indexOf("?"))), h.hasOwnProperty("forumid") && (d = i(h.forumid)))
                }
                f.hasOwnProperty("threadid") && (b = i(f.threadid));
                f.hasOwnProperty("postid") && (c = i(f.postid));
                var f = !0,
                    h = i((new Date).getTime() / 1E3),
                    n = a.cookie(g);
                if (n && (value = n.split("."), 4 == value.length)) {
                    var n = i(value[0]),
                        t = i(value[1]),
                        w = i(value[2]),
                        l = i(value[3]);
                    180 > h - l && (f = !1, n == d && t == b && w == c || (f = !0))
                }
                f && (d = [d, b, c, h].join("."),
                    a.cookie(g, d, {
                        expires: 10,
                        domain: "forums.somethingawful.com"
                    }), a("body").append('<img src="/s/' + d + '" alt="">'))
            }
        }
    })
}(window, document, jQuery);
window.SA || (SA = {});
SA.timg = new function (e, f, a) {
    var g = this,
        i = function (d, f) {
            var b = a(this).siblings("img"),
                c, h;
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
                c = parseInt(b.attr("o_width"), 10);
                h = parseInt(b.attr("o_height"), 10);
                g = Math.min(900, g.width());
                if (f && c > g) {
                    var i = b.position(),
                        g = (g - 3 * i.left) / c;
                    b.attr("width", c * g);
                    b.attr("height", h * g)
                } else b.removeAttr("width"), b.removeAttr("height");
                g = a.browser.webkit || a.browser.safari ? "body" : "html";
                h = a(g).scrollTop();
                c = b.offset().top;
                b = c + b.height();
                b - h > a(e).height() && (h = b - a(e).height());
                c < h && (h = c);
                h != a(g).scrollTop() && (a.browser.msie && 7 > parseInt(a.browser.version, 10) ? a(g).scrollTop(h) : a(g).animate({
                    scrollTop: h
                }, 150))
            }
            return !1
        }, k = function () {
            var d = a(this);
            if (d.hasClass("loading")) {
                d.removeClass("loading");
                var e =
                    d[0].naturalWidth || d.width(),
                    b = d[0].naturalHeight || d.height();
                if (200 > b && 500 >= e || 170 > e) d.removeClass("timg");
                else {
                    d.addClass("complete");
                    d.attr({
                        o_width: e,
                        o_height: b
                    });
                    var e = e + "x" + b,
                        b = 1,
                        c = d[0].naturalWidth || d.width(),
                        h = d[0].naturalHeight || d.height();
                    170 < c && (b = 170 / c);
                    200 < h * b && (b = 200 / h);
                    d.attr({
                        width: c * b,
                        height: h * b
                    });
                    var b = a('<span class="timg_container"></span>'),
                        f = a('<div class="note"></div>');
                    f.text(e);
                    f.attr("title", "Click to toggle");
                    b.append(f);
                    d.before(b);
                    b.prepend(d);
                    f.click(i);
                    b.click(function (b) {
                        if (1 ===
                            b.which || a.browser.msie && 9 > parseInt(a.browser.version, 10) && 0 === b.which) return i.call(f, b, !0), !1
                    })
                }
                d.trigger("timg.loaded")
            }
        };
    g.scan = function (d) {
        a(d).find("img.timg").each(function (d, b) {
            b = a(b);
            b.hasClass("complete") || (b.addClass("loading"), b[0].complete || null !== b[0].naturalWidth && 0 < b[0].naturalWidth ? k.call(b) : b.load(k))
        })
    };
    a(f).ready(function () {
        g.scan("body")
    });
    a(e).load(function () {
        var d = a("img.timg.loading");
        d.length && d.each(function (a, b) {
            k.call(b)
        })
    })
}(window, document, jQuery);
(function (e, f, a) {
    var g = !1,
        i = [],
        k = {}, d = null,
        j = null,
        b = [],
        c = 0,
        h = 0,
        n = 0,
        t = 0,
        w = "",
        l = null,
        m = null,
        x = !1,
        A = e.localStorage ? !0 : !1,
        N = e.JSON && JSON.stringify && JSON.parse,
        r = !1,
        y = !1,
        F = !1,
        B = !1,
        C = 0,
        D = function (a) {
            if (A && null !== a) {
                var b = null,
                    a = "postreply_" + a;
                if (1 < arguments.length) b = arguments[1], null === b ? localStorage.removeItem(a) : localStorage.setItem(a, JSON.stringify(b));
                else if (b = localStorage.getItem(a), null !== b) return JSON.parse(b)
            }
            return null
        }, G = function (a) {
            var b = "\n";
            "\n" != d[0].value.substr(d[0].value.length - 1) && (b +=
                "\n");
            s(b + a, null, !1)
        }, E = function () {
            if (!g && i.length) {
                g = !0;
                var b = a(i.shift());
                k[b.attr("href")] ? (G(k[b.attr("href")]), E()) : a.get(b.attr("href") + "&json=1", {}, function (a) {
                    k[b.attr("href")] = a.body;
                    G(a.body);
                    b.children("img").attr("src", "http://fi.somethingawful.com/images/sa-quote-added.gif");
                    E()
                }, "json")
            } else g = !1
        }, O = function () {
            a(this).css("opacity", 0.6);
            i.push(this);
            E();
            return !1
        }, H = function () {
            if (A && (null === b || 1 < b.length)) {
                var e = new Date,
                    c = null;
                if (r) c = "forum-" + t;
                else if (y) c = "reply-" + n;
                else return;
                l.find("div.save-state").text("Saved: " +
                    e.toLocaleDateString() + " " + e.toLocaleTimeString());
                D(c, {
                    time: e.getTime(),
                    message: a.trim(d[0].value)
                })
            }
        }, z = function () {
            clearInterval(h);
            if (null !== b) {
                c != b.length - 1 && b.splice(c + 1, b.length - c - 1);
                var a = q();
                b.push({
                    selection: a,
                    scroll: d[0].scrollTop,
                    text: d[0].value
                });
                c = b.length - 1
            }
            H()
        }, I = function () {
            if (b.length && 0 <= c && c < b.length) {
                var a = b[c].selection;
                d[0].value = b[c].text;
                u(a.start, a.end);
                d[0].scrollTop = b[c].scroll;
                p();
                H()
            }
        }, J = function () {
            c = Math.min(b.length - 1, c + 1);
            I()
        }, v = function () {
            clearInterval(h);
            h = setTimeout(z,
                250)
        }, q = function () {
            var a = null;
            "new" == x && (a = {
                start: d[0].selectionStart,
                end: d[0].selectionEnd
            });
            return a
        }, u = function (a) {
            d[0].setSelectionRange(a, 2 == arguments.length ? arguments[1] : a)
        }, K = function (a) {
            for (var b = [
                [0, 47],
                [58, 64],
                [91, 96],
                [123, 126]
            ], d = 0, e = b.length, c = !1; d < e; d++)
                if (a >= b[d][0] && a <= b[d][1]) {
                    c = !0;
                    break
                }
            return c
        }, L = function (a) {
            var b = q(),
                e = d[0].value,
                c = e.lastIndexOf("[" + a, b.start);
            return -1 != c ? (c = e.indexOf("[/" + a + "]", c), -1 == c ? !1 : c + 3 > b.end) : !1
        }, s = function (a, b, c) {
            null === b && (b = q());
            var e = d[0].scrollTop,
                h = d[0].value,
                f = h.substring(0, b.start),
                g = h.substring(b.start, b.end),
                h = h.substr(b.end),
                i = b.start;
            c ? (c = "[" + a + "]" + g + "[/" + a + "]", d[0].value = f + c, i = b.start == b.end ? b.start + a.length + 2 : b.start + c.length) : (d[0].value = f + a, i = b.start + a.length);
            b.end = i;
            d[0].scrollTop = d[0].scrollHeight;
            d[0].value += h;
            d[0].scrollTop < e && (d[0].scrollTop = e);
            u(i);
            z();
            p();
            return b
        }, M = function (a) {
            var a = a.split("&"),
                b = {}, d, c;
            for (c in a) d = a[c].indexOf("="), -1 != d ? b[a[c].substr(0, d)] = a[c].substr(d + 1) : b[a[c]] = !0;
            return b
        }, P = function () {
            var a = q(),
                b = null;
            return 5 <= a.start && (b = d[0].value.substr(a.start - 5), /^(\[img\]|\[url\]|\[url="?)/.test(b)) || 6 <= a.start && (b = d[0].value.substr(a.start - 6), /^\[timg\]/.test(b)) ? !0 : !1"
        }, Q = function (a) {
            var b = null,
                e = "";
            if (a.originalEvent.metaKey || a.originalEvent.ctrlKey) {
                var h = null;
                switch (a.keyCode) {
                case 66:
                    h = "b";
                    break;
                case 73:
                    h = "i";
                    break;
                case 76:
                    var h = q(),
                        f = d[0].value,
                        g = f.substring(0, h.start),
                        e = f.substring(h.start, h.end),
                        i = "[list]\n[*]" + e + "\n[/list]",
                        f = f.substr(h.end);
                    d[0].value = g + i + f;
                    u(h.start + e.length + 10);
                    z();
                    p();
                    a.stopPropagation();
                    a.preventDefault();
                    return !1;
                case 81:
                    h = "quote";
                    break;
                case 83:
                    h = "s";
                    break;
                case 85:
                    h = "u";
                    break;
                case 86:
                    if (P()) break;
                    b = q();
                    j.val("");
                    j.focus();
                    setTimeout(function () {
                        var a = b,
                            c = j[0].value;
                        if (/^https?:\/\//.test(c) && -1 == c.indexOf("\n") && -1 == c.indexOf("\r")) {
                            var e;
                            var h = /([^:]+):\/\/([^\/]+)(\/.*)?/.exec(decodeURI(c));
                            if (h) {
                                var f = {
                                    scheme: h[1],
                                    domain: h[2],
                                    path: h[3] || "",
                                    filename: "",
                                    query: {},
                                    fragment: ""
                                }, h = f.path.lastIndexOf("#"); - 1 != h && (f.fragment = f.path.substr(h + 1), f.path = f.path.substr(0,
                                    h));
                                h = f.path.lastIndexOf("?"); - 1 != h && (f.query = M(f.path.substr(h + 1)), f.path = f.path.substr(0, h));
                                h = f.path.lastIndexOf("/"); - 1 != h && (f.filename = f.path.substr(h + 1));
                                e = f
                            } else e = null;
                            var f = h = "",
                                g = !1,
                                i = e.filename.lastIndexOf("."); - 1 != i && (h = e.filename.substr(i + 1), f = e.filename.substr(0, i));
                            if ((i = /^([^\.]+\.)?youtu\.be$/.test(e.domain)) || /^([^\.]+\.)?youtube(-nocookie)?\.com$/.test(e.domain))
                                if (e.query.v) c = '[video type="youtube"', e.query.hd && (c += ' res="hd"'), e.fragment && (g = M(e.fragment), g.t && (c += ' start="' +
                                    parseInt(g.t, 10) + '"')), c += "]" + e.query.v + "[/video]", g = !0;
                                else if (i || /^\/embed/.test(e.path)) c = '[video type="youtube"', e.query.hd && (c += ' res="hd"'), e.query.start && (c += ' start="' + parseInt(e.query.start, 10) + '"'), c += "]" + e.path.substr(e.path.lastIndexOf("/") + 1) + "[/video]", g = !0;
                            if (!g) switch (h) {
                            case "jpg":
                            case "gif":
                            case "png":
                                if (/(www\.|i\.)imgur.com/i.test(e.domain)) switch (e = "", 5 < f.length && (e = f.substr(f.length - 1)), e) {
                                case "s":
                                case "l":
                                case "t":
                                    c = "[url=" + (c.substr(0, c.lastIndexOf("/") + 1) + f.substr(0, f.length -
                                        1) + "." + h) + "][img]" + c + "[/img][/url]";
                                    break;
                                default:
                                    c = "[img]" + c + "[/img]"
                                } else c = "[img]" + c + "[/img]"
                            }
                        }
                        d.focus();
                        s(c, a, !1)
                    }, 50);
                    break;
                case 88:
                    return v(), !0;
                case 89:
                    return J(), a.preventDefault(), a.stopPropagation(), !1;
                case 90:
                    return a.shiftKey ? J() : (c = Math.max(0, c - 1), I()), a.preventDefault(), a.stopPropagation(), !1
                }
                if (null !== h && (b = q(), null !== b)) {
                    if (!a.shiftKey && b.start == b.end) {
                        e = d[0].value;
                        g = b.start;
                        i = g - 1;
                        f = e.length;
                        for (g = {
                            start: g,
                            end: g
                        }; 0 <= i;) {
                            if (K(e.charCodeAt(i))) {
                                i++;
                                break
                            }
                            i--
                        }
                        for (g.start = i; i < f && !K(e.charCodeAt(i));) i++;
                        g.end = i;
                        b = g
                    }
                    a.preventDefault();
                    a.stopPropagation();
                    s(h, b, !0);
                    return !1
                }
            } else {
                h = null;
                switch (a.keyCode) {
                case 13:
                    !a.shiftKey && L("list") && (h = "\n[*]");
                    break;
                case 9:
                    L("code") && (h = "\t")
                }
                if (null !== h) return s(h, null, !1), a.preventDefault(), a.stopPropagation(), !1;
                v()
            }
            return !0
        }, p = function () {
            var b = l.find("div.character-count"),
                c = d[0].value.length;
            C = c;
            if (0 < c && 5E4 >= c && b.hasClass("over")) b.removeClass("over"), a('input.bginput[type="submit"]').attr("disabled", !1);
            else if (5E4 < c || 0 === c) b.addClass("over"), a('input.bginput[type="submit"]').attr("disabled", !0);
            B ? c = Math.round(1E5 * Math.random()) - 5E4 : 3E4 < c && !b.is(":visible") && b.show();
            b.text(c + " / 50000")
        };
    a(f).ready(function () {
        r = !! a('form[action="newthread.php"]').length;
        y = !! a('form[action="newreply.php"]').length;
        F = !! a('form[action="editpost.php"]').length;
        B = !! a("body.forum_26").length;
        if (r || y || F) {
            d = a('textarea[name="message"]');
            l = a('<div class="post-wrapper"></div>');
            d.before(l);
            l.append('<div class="postinfo"><div class="save-state">New reply</div><div class="character-count">0 / 50000</div></div>');
            l.prepend(d);
            d.keyup(p);
            d.change(function () {
                v();
                p()
            });
            setInterval(function () {
                C != d[0].value.length && (v(), p())
            }, 1E3);
            B && l.find("div.character-count").show();
            void 0 !== d[0].selectionStart && void 0 !== d[0].selectionEnd ? x = "new" : f.selection && (x = "ie legacy");
            N && !r && (a(f).delegate('td.postlinks > ul.postbuttons > li > a[href^="newreply.php"]', "click", O), m = a("div#content > div.standard"), m.length || (m = a('<div class="standard"><h2>Post Preview:</h2><div class="inner postbody"></div></div>'), m.css("width", "100%"),
                m.hide(), a("div#content > div.breadcrumbs").after(m)));
            if (A) {
                n = a('input[name="threadid"]').val();
                t = a('input[name="forumid"]').val();
                w = d[0].value;
                var c = null;
                r ? c = D("forum-" + t) : y && (c = D("reply-" + n));
                if (null !== c && c.message != w) {
                    var h = l.find("div.save-state"),
                        g = new Date(c.time);
                    h.html("<strong>Draft from: " + g.toLocaleDateString() + " " + g.toLocaleTimeString() + "</strong>");
                    g = a('<a href="#">Append</a>');
                    g.click(function () {
                        s(c.message, null, !1);
                        return !1
                    });
                    h.append(g);
                    g = a('<a href="#">Replace</a>');
                    g.click(function () {
                        d[0].value =
                            "";
                        s(c.message, null, !1);
                        u(c.length);
                        return !1
                    });
                    h.append(g);
                    r || (g = a('<a href="#">Preview</a>'), g.click(function () {
                        var b = c.message,
                            e = {
                                action: a('input[name="action"]').val(),
                                threadid: a('input[name="threadid"]').val(),
                                formkey: a('input[name="formkey"]').val(),
                                form_cookie: a('input[name="form_cookie"]').val(),
                                preview: "Preview Reply",
                                message: b
                            };
                        a('form[action="newreply.php"] input[type="checkbox"]:checked').each(function (b, c) {
                            c = a(c);
                            e[c.attr("name")] = "yes"
                        });
                        a.post("newreply.php?json=1", e, function (b) {
                            var c =
                                m.find("div.postbody");
                            c.empty();
                            c.html(b.preview);
                            m.show();
                            SA.timg.scan(c);
                            j.css({
                                top: d.offset().top
                            });
                            b = a.browser.webkit || a.browser.safari ? "body" : "html";
                            c = m.offset();
                            c.top < a(b).scrollTop() && a(b).animate({
                                scrollTop: c.top
                            }, 150)
                        });
                        return !1
                    }), h.append(g))
                }
            } else l.find("div.save-state").text("Drafts not enabled in your browser");
            "new" == x && (e.adv_post_disabled ? (b = null, d.keyup(function () {
                C != d[0].value.length && (v(), p())
            })) : (j = a("<textarea></textarea>"), j.css({
                    position: "absolute",
                    left: -2E3,
                    top: d.offset().top
                }),
                a("body").append(j), d.keydown(Q), u(d[0].value.length), z()));
            p();
            d.focus()
        }
    })
})(window, document, jQuery);
window.SA || (SA = {});
SA.thread = new function (e, f, a) {
    var g = /\?postid=(\d+)/,
        i = /#post(\d+)/,
        k = a.browser.webkit || a.browser.safari ? "body" : "html",
        d = function (b) {
            var c = a("#" + b);
            if (c.length || "top" == b) {
                if (a.browser.msie && 9 > parseInt(a.browser.version, 10)) e.location.href = "#" + b;
                else {
                    var d = c.length ? c.offset().top : 0;
                    c.attr("id", "");
                    e.location.href = "#" + b;
                    c.attr("id", b);
                    a(k).animate({
                        scrollTop: d
                    }, 150)
                }
                return !1
            }
            return !0
        }, j = function () {
            var b = a(this).attr("href"),
                c = null;
            if (/^https?:\/\//.test(b) && !/^https?:\/\/(.*\.)?forums\.somethingawful\./.test(b) ||
                /^\/?attachment\.php/.test(b)) return !0;
            g.test(b) ? c = g : i.test(b) && (c = i);
            return null !== c ? (b = "post" + c.exec(b)[1], d(b)) : !0
        };
    a(f).ready(function () {
        var b = a('<div class="jump_top left">UP</div>'),
            c = a('<div class="jump_top right">UP</div>');
        a(f).delegate("td.postbody a", "click", j);
        SA.utils.isMobile ? (a(".bbc-spoiler").bind("touchmove", function (a) {
            a.stopPropagation();
            a.preventDefault()
        }), a(".bbc-spoiler").bind("touchstart", function (b) {
            b.target == this && (a(this).toggleClass("stay"), b.stopPropagation(), b.preventDefault())
        })) :
            (a(".bbc-spoiler").click(function (b) {
            b.target == this && a(this).toggleClass("stay")
        }), a(".bbc-spoiler").hover(function () {
            a(this).addClass("reveal")
        }, function () {
            a(this).removeClass("reveal")
        }));
        a("body.showpost").length || (a.browser.msie && 7 > parseInt(a.browser.version, 10) ? (c.show(), a("body").append(c)) : (a("body").append(b), a("body").append(c), a(f).mousemove(function (d) {
            var f = b.is(":visible"),
                g = c.is(":visible"),
                i = d.pageY > a(k).scrollTop() + a(e).height() - 100;
            i && 100 > d.pageX ? (g && c.hide(), f || b.show()) : (i && d.pageX >
                a(e).width() - 100 ? g || c.show() : g && c.hide(), f && b.hide())
        })));
        a("div.jump_top").click(function () {
            return d("top")
        });
        a('form.forum_jump select[name="forumid"]').change(function () {
            var b = a(this),
                c = b.val(),
                b = b.siblings('input[name="daysprune"]').val();
            if (-1 == c) return !1;
            e.location.href = "/forumdisplay.php?daysprune=" + b + "&forumid=" + c
        })
    });
    a(e).load(function () {
        if (a("body.showthread").length && e.adjust_page_position && e.location.hash) {
            var b = a(e.location.hash);
            b.length && (b = b.offset(), e.scrollTo(b.left, b.top))
        }
    })
}(window,
    document, jQuery);
new function (e, f, a) {
    var g = 0,
        i = null,
        k = function () {
            clearInterval(g);
            a.get("/flag.php?forumid=26", function (a) {
                i.attr("title", 'This flag proudly brought to you by "' + a.username + '" on ' + a.created);
                i.attr("src", "http://fi.somethingawful.com/flags" + a.path + "?by=" + encodeURIComponent(a.username));
                g = setTimeout(k, 6E4)
            })
        };
    a(f).ready(function () {
        a(f).delegate("div.toggle_tags", "click", function () {
            a(this).parents("div#filter").eq(0).toggleClass("open")
        });
        a("div.pages select").change(function () {
            var b = a(this).attr("data-url");
            e.location.href = b + "&pagenumber=" + a(this).val()
        });
        if (a("body.forumdisplay, body.showthread").length) {
            var d = a("div.breadcrumbs > span:first-child");
            d.each(function (b, c) {
                var c = a(c),
                    d = [];
                c.find("a").each(function (b, c) {
                    d.push(a(c).clone())
                });
                c.html(" &rsaquo; ");
                c.append(d.pop());
                var e = a(d.pop());
                c.prepend(e);
                if (d.length) {
                    var f = a("<span></span>");
                    f.append(d);
                    f.append(e.clone());
                    e.prepend(f)
                }
                e.addClass("up")
            });
            d.prepend('<a class="index" href="/" title="Forums index">&laquo;</a>&nbsp;')
        }
        a(f).delegate("div.thread_tags a.if",
            "click", function (b) {
                if (b.shiftKey) {
                    b = /posticon=(\d+)/.exec(a(this).attr("href"));
                    if (!b) return !1;
                    var b = b[1],
                        c = SA.utils.qs(),
                        d = null;
                    if (c.posticon)
                        if (-1 == ("," + c.posticon).indexOf("," + b)) {
                            d = c.posticon.split(",");
                            for (d.push(b); 10 < d.length;) d.shift();
                            c.posticon = d.join(",")
                        } else return !1;
                        else c.posticon = b;
                    e.location.href = "/forumdisplay.php?" + SA.utils.qs(c).replace(/%2c/ig, ",");
                    return !1
                }
            });
        if (a("body.forum_26, body.forum_154").length) i = a(new Image), a("div#flag_container").append(i), k();
        else if (!a.browser.msie && !a.browser.opera && !SA.utils.isMobile && a("body.forum_25").length) d = a('<div id="gc_overlay"></div>'), a("body").append(d);
        else if (a("body.loginform").length) {
            var g = a("input.secure_login"),
                d = function () {
                    var b = a("form.login_form"),
                        c = "https://forums.somethingawful.com/account.php";
                    g.is(":checked") ? a.cookie("secure_login", null) : (c = "/account.php", a.cookie("secure_login", "no"));
                    b.attr("action", c)
                };
            g.click(d);
            "no" == a.cookie("secure_login") && (g.attr("checked", null), d())
        }
    })
}(window, document, jQuery);