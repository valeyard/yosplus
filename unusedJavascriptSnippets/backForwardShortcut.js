                    var back = "empty"
        var forward = "empty"

        var top = $.find(".top")[0]

        console.log("ahhhh")
        $(top).find("a").each(function(index, thing) {
                var geg = new RegExp("(pagenumber=)([0-9]+)")

                var g = geg.exec($(thing).attr("href"))
                if (geg.test($(thing).attr("href"))) {
                    console.log($(thing)[0].innerText)
                    if ($(thing)[0].innerText == "‹") {
                        back = $(thing).attr("href")
                    }
                    if ($(thing)[0].innerText == "›") {
                        forward = $(thing).attr("href")
                    }
                }
            })

            // FEATURE - BACK AND FORWARD
            window.addEventListener("keyup", function(e) {
                if (e.keyCode == 81) {
                    if (back != "empty") window.location = back;
                }
            })
            window.addEventListener("keyup", function(e) {
                if (e.keyCode == 69) {
                    if (forward != "empty") window.location = forward;
                }
            })