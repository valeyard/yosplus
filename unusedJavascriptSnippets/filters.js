            
        var forum_177 = {
            "\\b(daniel bryan|bryan|dbd|db)\\b": "vanilla midget",
            "\\bover/under\\b": "odds"
        };
        var forum_219 = {
            "\\bsteve jobs\\b": "stebe jobs",
            "\\bandroid\\b": "anroid",
            "\\bgodaddy\\b": "nodaddy",
            "\\bValeyard\\b": "asshole",
            "\\apt gangbang\\b": "<marquee>apt gangbang</marquee>",
            "\\b(Mcdonald's|mcdonalds|McDonald's)\\b": "Mecca"
        };
        var forum_26 = {
            "\\b ralp \\b": " the talking toilet ",
            "\\bgirls\\b": "bleeders",
            "\\bgbs\\b": "the moon",
            "\\bguys\\b": "bleeders"
        };
        var filters = {
            177: forum_177,
            219: forum_219,
            26: forum_26
        }

        var thisForum = $bodyS.attr("data-forum")


            FEATURE DISABLED
            if (g.filter) {
                for (var j in filters[thisForum]) {
                    var h = new RegExp(j, 'gi');
                    var t = h.exec(text);

                    if (t != null) {
                        console.log("Foundd"); //had to change t[0] to t[1] to make it work, it worked previously the other way, watch out
                        $(this).find(" td.postbody")[0].innerHTML = $(this).find(" td.postbody")[0].innerHTML.replace(h, filters[thisForum][j])
                    };

                    var gah = new RegExp("\\b" + j + "\\b", 'gi');
                    var tee = gah.exec(author);

                    if (tee != null) {
                        console.log(tee);
                        console.log($(this).find(" dt.author")[0].innerText); //had to change tee[0] to tee[1] to make it work, it worked previously the other way, watch out
                        $(this).find(" dt.author")[0].innerHTML = $(this).find(" dt.author")[0].innerHTML.replace(tee[0], filters[thisForum][j])
                    }
                }
            }