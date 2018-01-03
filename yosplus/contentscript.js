//https://gist.github.com/takien/4077195
function YouTubeGetID(url) {
    var ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url;
    }
    return ID;
}

function hasOwnProperty(obj, prop) {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
        (!(prop in proto) || proto[prop] !== obj[prop]);
}

function cleanString(input) {
    var output = "";
    for (var i=0; i<input.length; i++) {
        if (input.charCodeAt(i) <= 127) {
            output += input.charAt(i);
        }
    }
    return output;
}

function utf8_encode(argString) {
  //  discuss at: http://phpjs.org/functions/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman
  // bugfixed by: Onno Marsman
  // bugfixed by: Ulrich
  // bugfixed by: Rafal Kukawski
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var utftext = '',
    start, end, stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else { // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
}

$(document).ready(function() {
    console.log("Asdas")
    var storage = chrome.storage.sync;
    var g;
    var next;
    var settings = ["fyadMods", "autoplay", "smilies", "youtubeHD", "boldname", "iglist", "oldbread", "lazyload", "avatarHideOption", "snypeAudio", "snype", "fflist", "signature", "quote", "avatarHide", "ads", "tweet", "filter", "vine", "webm", "cats", "main", "tree", "embedTweet"];

    chrome.storage.sync.get(settings, function(obj) {
        g = obj;

        $.fn.highlightQuotes = function() {

            $this.find(".bbc-block").each(function(index, quote) {
                $this = $(quote);

                var posted = new RegExp("([A-Za-z0-9 -_]+) posted:")
                if ($this.find("h4")[0] != null) {
                    var k = posted.exec($this.find("h4")[0].innerText)
                    if (posted.test($this.find("h4")[0].innerText)) {
                        if (k[1] == localStorage.user) {
                            if (thisForum != 219) $(quote).attr("class", $(quote).attr("class") + " meMain")
                            else if (thisForum == 219) {
                                if (!amberPos) {
                                    $(quote).attr("class", $(quote).attr("class") + " meAmber")
                                } else {
                                    $(quote).attr("class", $(quote).attr("class") + " meGreen")
                                }
                            }
                        }
                    }
                }
            });
        };

        function checkSettings(g) {
            if (g.tweet == undefined) g.tweet = false;
            if (g.lazyload == undefined) g.lazyload = false;
            if (g.avatarHide == undefined) g.avatarHide = false;
            if (g.signature == undefined) g.siganture = false;
            if (g.quote == undefined) g.quote = true;
            if (g.webm == undefined) g.webm = true;
            if (g.vine == undefined) g.vine = true;
            if (g.filter == undefined) g.filter = false;
            if (g.embedTweet == undefined) g.embedTweet = true;
            if (g.boldname == undefined) g.boldname = true;
            if (g.oldbread == undefined) g.oldbread = false;
            if (g.cats == undefined) g.cats = {
                "Favourites": true,
                "Main": true,
                "Discussion": true,
                "The Finer Arts": true,
                "The Community": true,
                "Archives": true
            }
            if (g.fflist == undefined) g.fflist = {};
            if (g.snype == undefined) g.snype = false;
            if (g.snypeAudio == undefined) g.snypeAudio = false;
            if (g.avatarHideOption == undefined) g.avatarHideOption = false;
            if (g.ads == undefined) g.ads = true;
            if (g.tree == undefined) g.tree = false;
            if (g.youtubeHD == undefined){
             g.youtubeHD = true;
            }
            if (g.fyadMods == undefined){
             g.fyadMods = [];
            }
            if (g.smilies == undefined){
                g.smilies = {};
            }
            if (g.autoplay == undefined){
                g.autoplay = true;
            }
    
            chrome.storage.sync.set(g, function() {});
        }

        function basedOnAuthor(post) {
            var yostop = "obstipator";
            var postHTML = $(post).find(" td.postbody")[0].innerHTML;
            var authorText = $(post).find(" dt.author")[0].innerText;
            var authorHTML = $(post).find(" dt.author")[0].innerHTML;

            var authorRegex = new RegExp("\\b" + yostop + "\\b", 'gi');
            var authorExec = authorRegex.exec(authorHTML);

            if (authorExec != null) {
                $(post).find("dd.title").append("TEST")
            }
            return 1;
        }

        function oldBreadcrumbs() {
            var bc = document.querySelectorAll(".breadcrumbs > span.mainbodytextlarge");
            for (i = 0; i < bc.length; i++) {
                if (bc[i].childNodes[0].tagName.toLowerCase() == "b") {
                    bc[i].parentNode.insertBefore(bc[i].childNodes[0], bc[i]);
                    bc[i].parentNode.removeChild(bc[i]);
                    continue;
                } else {
                    var bcup = bc[i].querySelector("a.up");
                    if (bcup.childNodes.length > 1) {
                        b = document.createElement("b");
                        var c = bc[i].querySelectorAll(".up span a");
                        for (j = 0; j < c.length; j++) {
                            b.appendChild(c[j]);
                            b.appendChild(document.createTextNode(" › "));
                        }

                        var bclast = bc[i].querySelector(".bclast");
                        if (bclast) b.appendChild(bclast.cloneNode(true));

                        while (bc[i].childNodes.length > 0) {
                            bc[i].removeChild(bc[i].childNodes[0]);
                        }
                        bc[i].appendChild(b);
                    }
                }
            }
            $("span.mainbodytextlarge").prepend('<a class="index" href="/" title="Forums index">«</a>');
            return 1;
        }

        function lazyload(post) {
            $(post).find("td.postbody").find("img").each(function(index, image) {
                $this = $(image)
                var src = this.getAttribute("src")
                this.setAttribute("class", this.getAttribute("class") + " lazy")
                var class1 = this.getAttribute("class")
                this.removeAttribute("src")
                this.setAttribute("data-original", src)
            });

            $("img.lazy").lazyload();

            return 1;
        }

        function tweetButton(post) {
            var authorText = $(post).find(" dt.author")[0].innerText;
            var authorHTML = $(post).find(" dt.author")[0].innerHTML;
            var tweetText = $(post).find(" td.postbody")[0].innerText.replace(/\"/g, "&quot;");

            if (authorText == localStorage.user) {

                if (g.tweet) {
                    $(post).find(" ul.postbuttons").append('<li><a href="https://twitter.com/share" class="twitter-share-button" data-url="manas" data-text="' + tweetText + '" data-count="none" data-dnt="true">Tweet</a></li>');
                }
            }
            return 1;
        }

        function embedVine(post) {
            $this = $(post);
            var vineRegex = new RegExp("(http|https)://vine\.co/v/[A-Za-z0-9]+");
            $this.find("a").each(function(index, value) {
                var url = $(value);
                if (vineRegex.test(url[0].href) == true) {
                    var vineHTML = '<iframe class="vine-embed" src="' + url[0].href + '/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>';
                    url.replaceWith(vineHTML);
                }
            });
            return 1;
        }

        function embedWebm(post) {
            $this = $(post);
            var webmRegex = new RegExp("[:A-Za-z0-9\.\/\-\_]+\\.(webm|gifv)");

            $this.find("a").each(function(index, value) {
                var url = $(value);

                if (webmRegex.test(url[0].href) == true) {
                    var auto;
                    if (g.autoplay) auto = 'autoplay '
                    else auto = '';
                    var videoHTML = '<video ' + auto + 'class="san" loop muted="true" controls> <source src="' + url[0].href.substring(0, url[0].href.length - 4) + "webm" + '" type="video/webm"> </video>'
                    url.replaceWith(videoHTML);
                }
            });

            $this.find(".bbc-spoiler").each(function(index, value) {
                var url = $(value);

                if (webmRegex.test(url[0].innerText) == true) {
                    var videoHTML = '<video autoplay class="san" loop muted="true" controls> <source src="' + url[0].innerText.substring(0, url[0].innerText.length - 4) + "webm" + '" type="video/webm"> </video>'
                    url[0].innerHTML = videoHTML;
                }
            });

            return 1;
        }

        function intialisation() {

            //selectors
            $bodyS = $("body")
            $headS = $("head")
            $postS = $(".post")
            var c = 0;
            thisForum = $bodyS.attr("data-forum")

            //adding stylesheets
            var s = chrome.extension.getURL("css/yosplus.css")
            var gh = chrome.extension.getURL("css/twittertimeline.css")
            var mg = chrome.extension.getURL("css/megreen.css")
            var ma = chrome.extension.getURL("css/meamber.css")
            var fa = chrome.extension.getURL("css/font-awesome.min.css")
            var rangyinputsfile = chrome.extension.getURL("js/rangy/rangyinputs-jquery-src.js")
            var bootstrapMin = chrome.extension.getURL("css/bootstrap.css")

            $headS.append('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />s')

            $headS.append('<link id="yosplusStyle" rel="stylesheet" href="' + s + '" type="text/css" />');
            $bodyS.append('<link id="fa" rel="stylesheet" href="' + fa + '" type="text/css" />');
            $headS.append('<link rel="stylesheet" href="http://cdn.jsdelivr.net/qtip2/2.2.0/jquery.qtip.min.css" type="text/css" />');
            $headS.append('<link rel="stylesheet" href="' + bootstrapMin + '" type="text/css" />');
            $headS.append('<script type="text/javascript" src="http://cdn.jsdelivr.net/qtip2/2.2.0/jquery.qtip.min.js"></script>');
            $headS.append('<script type="text/javascript" src="'+rangyinputsfile+'"></script>');

            //amberpos/greenpos check

            if (thisForum == 219){
                if (localStorage['219style'] == 1) {
                    amberPos = true;
                    $headS.append('<link id="yplus" rel="stylesheet" href="' + mg + '" type="text/css" />');
                } else if (localStorage['219style'] == 0) {
                    amberPos = false;
                    $headS.append('<link id="yplus" rel="stylesheet" href="' + ma + '" type="text/css" />');
                }
            }

            

            checkSettings(g)


            if (g.tweet) {

                var twitterWidgetSrc = chrome.extension.getURL("js/widgets.js")

                window.twttr = (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0],
                    t = window.twttr || {};
                  if (d.getElementById(id)) return t;
                  js = d.createElement(s);
                  js.id = id;
                  js.src = twitterWidgetSrc;
                  fjs.parentNode.insertBefore(js, fjs);

                  t._e = [];
                  t.ready = function(f) {
                    t._e.push(f);
                  };

                return t;
            }(document, "script", "twitter-wjs")); 

            }


            user = $("#loggedinusername")[0];
            if (user != undefined){
                localStorage.user = user.innerText;
                console.log(user.innerText)
                console.log(localStorage.user)
            } 

            if (g.oldbread) oldBreadcrumbs()
            // if (g.ads) $("#ad_banner_user").remove()
            return 1;
        }

        function anywhereActions(){
            if (window.location.protocol != "https:")
                window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
        }

        function threadListActions() {

            // if (g.snypeAudio) {
            //     var audioPath = chrome.extension.getURL("audio/Headshot.wav");
            //     $bodyS.prepend('<audio id="audio" src=' + audioPath + ' ></audio>')
            // }
            console.log("threadlist")

            if (thisForum == 219) {

                if (g.snype) {
                    $("tr.thread").each(function(index, value) {
                        $this = $(value)
                        var replies = $this.find("td.replies")[0].innerText
                        if (replies < 40) {
                            if (replies % 40 == 39) $(value).find(".title_inner").prepend('<input style="float:right;margin-top:7px;margin-right:7px;" type="button" class="snype" value="Snype"/>')
                        } else if (replies == 0) {} else {
                            if (replies % 40 == 39) $(value).find(".title_inner").prepend('<input style="float:right;margin-top:7px;margin-right:7px;" type="button" class="snype" value="Snype"/>')
                        }
                    })

                    $('.snype').click(function(event) {
                        var audio = document.getElementById("audio");
                        // if (g.snypeAudio) audio.play();
                        var a = $(this).parents('tr.thread');
                        var geg = new RegExp("(threadid=)([0-9]+)")
                        a.find(".snype").remove()
                        $.each(a.find("a"), function(index, value) {
                            var g = geg.exec(value.href);
                            if (g != null) {
                                $.get("https//forums.somethingawful.com/newreply.php?action=newreply&threadid=" + g[2],
                                    function(data) {
                                        formKey = jQuery('input[name="formkey"]', data).val();
                                        formCookie = jQuery('input[name="form_cookie"]', data).val();
                                        var textArray = [
                                            'snype',
                                            'headshot',
                                            ':bsdsnype:',
                                            ':zaeed:',
                                            ':sicknasty:',
                                            'snipeeeddd',
                                            '[img]http://i.imgur.com/t0l7mQL.gif[/img]',
                                            '[img]http://i.imgur.com/19ZCuzP.gif[/img]'
                                        ];
                                        var randomNumber = Math.floor(Math.random() * textArray.length);
                                        e = {
                                            action: 'postreply',
                                            threadid: g[2],
                                            formkey: formKey,
                                            form_cookie: formCookie,
                                            message: textArray[randomNumber]
                                        };
                                        $.post('newreply.php?', e,
                                            function(returnedData) {});
                                    }
                                );
                                return false
                            }
                        })
                    });
                }
            }

            return 1;
        }

        function quickReply(){
            $(".threadbar.bottom").after('<div style="display:none; overflow:scroll; overflow-x: hidden;" id="sanSmilieBox"><i id="smilieSpinner" style="display:none; margin:auto;" class="fa fa-5x fa-spinner"></i></div><div id="sanQuickReplyContainer" style="display:none;"><a href="/" id="sanSmilies" style="position:absolute;">Smilies</a><div id="sanQuickReplyButtons"><i id="loadingSpinnerQuick" style="display:none;" class="fa fa-2x fa-spinner"></i><input type="button" class="sanQuickReplySubmit" value="Post"><i id="closeQuickReply" class="fa fa-1x fa-times"></div><textarea name="message" id="sanQuickReplyText" name="message" rows="20" cols="83" tabindex="2"></textarea></div>')

            $("#sanSmilies").click(function(event){
                event.stopPropagation();
                event.preventDefault();
                if ($("#sanSmilieBox").text() == ""){
                    $("#sanSmilieBox").show("slow");
                    $("#smilieSpinner").show("fast");
                    $("#smilieSpinner").addClass("fa-pulse");
                    


                    $.ajax({
                        url: 'https://forums.somethingawful.com/misc.php?action=showsmilies',
                        type: 'GET',
                        datatype: "html",
                        success: function(data) {
                            var smiliePage = $(data)
                            $("#smilieSpinner").hide("fast");
                            $("#smilieSpinner").removeClass("fa-pulse");
                            $("#sanSmilieBox").append('<div style="width:100%;" class="container"></div>')
                            $("#sanSmilieBox").find(".container").append('<input id="smilieSearch" type="text" class="form-control col-lg-10" placeholder="Start typing to filter smilies">')
                            $("#sanSmilieBox").find(".container").append('<span class="col-lg-10">Most recently used</span>')
                            $("#sanSmilieBox").find(".container").append('<ul class="row smilieList" id="recent" style="padding-left: 0px;"></ul>')
                            $("#sanSmilieBox").find(".container").append('<span class="col-lg-10">Everything else</span>')
                            $("#sanSmilieBox").find(".container").append('<ul class="row smilieList" id="everythingElse" style="padding-left: 0px;"></ul>')
                            
                            $( "#sanSmilieBox" ).hover(
                              function() {
                                $("#sanQuickReplyContainer").fadeTo("fast", 1);
                              }, function() {
                                if ( $("#sanQuickReplyContainer").css('display') != 'none' && $("#sanQuickReplyContainer").css('opacity') == '1' ) $("#sanQuickReplyContainer").fadeTo("fast", 0.3);
                              }
                            );

                            $(data).find("li.smilie").each( function( index, c){
                                // console.log(c.innerText.replace(/(\r\n|\n|\r)/gm, ''))
                                if ( hasOwnProperty(g.smilies, $.trim(c.innerText.replace(/(\r\n|\n|\r)/gm, '') ))) $("ul.smilieList#recent").append($(c).addClass("col-lg-3"))
                                else $("ul.smilieList#everythingElse").append($(c).addClass("col-lg-3"))
                            })
                            // $("#sanSmilieBox").append('</div></ul>')

                            $("body").on("click", "li.smilie", function(event) {
                                console.log(event.currentTarget.innerText)
                                var caretPos = $("#sanQuickReplyText").getSelection().start;
                                var textAreaTxt = $("#sanQuickReplyText").val();
                                var smilieText = $.trim(event.currentTarget.innerText.replace(/(\r\n|\n|\r)/gm, ''));
                                if (hasOwnProperty(g.smilies, smilieText)){
                                    g.smilies[smilieText] = g.smilies[smilieText] + 1
                                    console.log(g.smilies)
                                    console.log(event.currentTarget.innerText.replace(/(\r\n|\n|\r)/gm, ''))
                                }
                                else{
                                    g.smilies[smilieText] = 1;
                                    $(event.currentTarget).appendTo("ul.smilieList#recent");
                                    console.log(g.smilies)
                                }
                                chrome.storage.sync.set(g, function() {});
                                $("#sanQuickReplyText").val(textAreaTxt.substring(0, caretPos) + event.currentTarget.innerText + textAreaTxt.substring(caretPos));
                            })

                            var $rows = $('ul.smilieList li');
                            $('#smilieSearch').keyup(function() {
                                var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

                                $rows.show().filter(function() {
                                    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                                    return !~text.indexOf(val);
                                }).hide();
                            });
                        }
                    })
                }
                else{
                    $("#sanSmilieBox").show("slow");
                }
            })

            $( "#sanQuickReplyContainer" ).resizable(
                {       minHeight: 250,
                        minWidth: 350,
                        animate:true,
                        handles:"n, e, w, ne, nw"});
            $( "#sanQuickReplyContainer" ).draggable();


            $( "#sanQuickReplyContainer" ).hover(
              function() {
                $("#sanQuickReplyContainer").fadeTo("fast", 1);
              }, function() {
                if ( $("#sanQuickReplyContainer").css('display') != 'none' && $("#sanQuickReplyContainer").css('opacity') == '1' ) $("#sanQuickReplyContainer").fadeTo("fast", 0.3);
              }
            );

            $("#closeQuickReply").click(function(event){
                event.stopPropagation();
                $( "#sanQuickReplyText" ).val('')
                $( "#sanQuickReplyContainer" ).hide("slow");
                $("#sanQuickReplyContainer").css("opacity", "1");

                $( "#sanSmilieBox" ).hide("slow");
                $("#sanSmilieBox").css("opacity", "1");
            })

            $("body").on("click", ".sanQuickReply", function(event) {
                event.stopPropagation();
                $this = $(event.target);
                // console.log($this.parent().find("img[alt='Quote']")[0].parentNode.href)

                var tempText = $this.parent().find("img[alt='Quote']")[0];
                if (tempText != undefined){
                    tempText = tempText.parentNode.href + '&json=1'

                    $.get(tempText,
                        function(data,textStatus, request) {
                            console.log(data.body)
                            console.log(utf8_encode(data.body));
                            // console.log(data)

                            // alert(request.getResponseHeader('Content-Type')); 
                            console.log(decodeURIComponent(encodeURIComponent( data.body )))
                            var caretPos = $("#sanQuickReplyText").getSelection().start;
                            var textAreaTxt = $("#sanQuickReplyText").val();
                            $("#sanQuickReplyText").val(textAreaTxt.substring(0, caretPos) + cleanString( data.body ) + textAreaTxt.substring(caretPos));
                            // $("#sanQuickReplyText").focus();
                            $("#sanQuickReplyContainer").fadeTo("fast", 1);
                        }
                    );
                }
                $("#sanQuickReplyContainer").show("slow");
                $("#sanQuickReplyContainer").css("opacity", "1");
                $("#sanQuickReplyText").focus();                
            });

            $('#sanQuickReplyText').on('paste', function (event) {
              var element = this;
              var pastedData = event.clipboardData.getData('text');
              // console.log(event.clipboardData.getData('text'))
              setTimeout(function () {
                var text = $(element).val();
                // console.log(text)
                //http://stackoverflow.com/a/10591582
                // "https://youtu.be/flls8VaEEZc"
                // "https://youtu.be/flls8VaEEZc?t=2644"
                var videoid = text.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s\?&]+)/);
                var isImage = (/^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/).test(pastedData)
                if(videoid != null) {
                    if (g.youtubeHD) var res = ' res="hd"' 
                    else var res = "";
                // console.log(res)
                    var paramsTemp = $.param.querystring(pastedData);
                    var paramObj = $.deparam(paramsTemp)
                    console.log(paramObj)
                    if (paramObj.t != undefined) var time=' start="'+paramObj.t + '"';
                    else var time="";
                    var embedVideo = '[video type="youtube"' + time + res + ']' + videoid[1] + '[/video]';
                    var caretPos = $("#sanQuickReplyText").getSelection().start;
                    var textAreaTxt = $("#sanQuickReplyText").val();
                    // console.log(textAreaTxt)
                    textAreaTxt = textAreaTxt.replace(pastedData, "");
                    // console.log(textAreaTxt)
                    $(element).val(textAreaTxt.substring(0, caretPos) + embedVideo + textAreaTxt.substring(caretPos));
                   // $(element).val('[video type="youtube"]' + videoid[1] + '[/video]')
                } 

                else if (isImage){
                    var embedImage = '[img]' + pastedData + '[/img]';
                    var caretPos = $("#sanQuickReplyText").getSelection().start;
                    var textAreaTxt = $("#sanQuickReplyText").val();
                    textAreaTxt = textAreaTxt.replace(pastedData, "");
                    $(element).val(textAreaTxt.substring(0, caretPos) + embedImage + textAreaTxt.substring(caretPos));
                }
                else { 
                    console.log("The youtube url is not valid.");
                }
              }, 0);
            });
            
           $('.sanQuickReplySubmit').click(function(event) {
                $this = $(event.target);
                $('.sanQuickReplySubmit').attr("disabled", true);
                $("#loadingSpinnerQuick").show("fast");
                $("#loadingSpinnerQuick").addClass("fa-pulse");

                var paramsTemp = $.param.querystring();
                var paramObj = $.deparam(paramsTemp)
                if (isNaN(parseInt(paramObj.pagenumber))) paramObj.pagenumber = 1

                var tempUrl = window.location.pathname + '?' + '&threadid=' + paramObj.threadid + '&pagenumber=' + paramObj.pagenumber + window.location.hash;
                var lastPost = parseInt($(".post").last().attr("data-idx"));

                $.get("https://forums.somethingawful.com/newreply.php?action=newreply&threadid=" + paramObj.threadid,
                    function(data) {
                        formKey = jQuery('input[name="formkey"]', data).val();
                        formCookie = jQuery('input[name="form_cookie"]', data).val();
                        formBookmark = jQuery('input[name="bookmark"]', data).val();
                        // console.log($("#sanQuickReplyText").val())
                        // console.log(unescape( encodeURIComponent( $("#sanQuickReplyText").val() ) ))
                        // console.log(cleanString($("#sanQuickReplyText").val() )) 
                        // console.log(data)                 
                        e = {
                            action: 'postreply',
                            threadid: paramObj.threadid,
                            formkey: formKey,
                            form_cookie: formCookie,
                            parseurl: 'yes',
                            bookmark: formBookmark,
                            message: cleanString($("#sanQuickReplyText").val())
                        };                  
                        $.post('newreply.php?', e,
                            function(returnedData) {
                                var test;
                                //successful post
                                if ( $(returnedData).find("h2")[0].innerText === "Redirecting..." ){

                                   $.get(tempUrl,
                                        function(data) {
                                            appendPosts(data)
                                            $("#sanQuickReplyText").val('');
                                            $("#sanQuickReplyContainer").hide("slow");
                                            $("#loadingSpinnerQuick").hide("fast");
                                            $("#loadingSpinnerQuick").removeClass("fa-pulse");
                                            $('.sanQuickReplySubmit').removeAttr("disabled");
                                            $( "#sanSmilieBox" ).hide("slow");
                                            $("#sanSmilieBox").css("opacity", "1");
                                        }
                                    );
                               }
                               else if ( $(returnedData).find("h2")[0].innerText === "Special Message From Senor Lowtax" ){
                                    $("#sanQuickReplyText").animate({backgroundColor: 'red'})
                                    $("#sanQuickReplyText").animate({backgroundColor: 'black'})
                                    $("#loadingSpinnerQuick").hide("fast");
                                    $("#loadingSpinnerQuick").removeClass("fa-pulse");
                                    $('.sanQuickReplySubmit').removeAttr("disabled");
                               }
                            });
                    }
                );
            });
        }

        function shortcutKeys(){
            var $ta = $('textarea[name="message"]');
            $ta.focus();
            $ta.keydown(function(e) {
                if (e.which == 17)
                    $(window).bind('keydown.ctrlI', function(e) {
                        if (e.which == 18) {
                            e.preventDefault();
                            $ta.surroundSelectedText("[spoiler]", "[/spoiler]");
                        }
                    });
            });

            $(window).keyup(function(e) {
                if (e.which == 17)
                    $(window).unbind('keydown.ctrlI');
            });
        }

        function postcock(){

            var qs = $.param.querystring();
            var myObj = $.deparam(qs)
            if (isNaN(parseInt(myObj.pagenumber))) myObj.pagenumber = 1
            // console.log(myObj.action)
            if (myObj.action === "posthistory" || myObj.action === "results"){
                console.log("asd")
                    $("li.search_result").each(function(index, result) {
                    //     $this = $(result)
                        var forumLink = $(result).find("a.forumtitle")[0].href;
                        var forumParems = $.param.querystring(forumLink);
                        var forumO = $.deparam(forumParems)
                    //     var useridLink = $(result).find("a.username")[0].href;
                    //     var userParam = $.param.querystring(useridLink);
                    //     var userObj = $.deparam(userParam)
                    //     var threadID;
                    //     $.get(postLink,
                    //         function(data) {
                    //             threadID = $(data).find("#thread").attr("class").substring(7);
                    //     newUrl = $.param.querystring("http://forums.somethingawful.com/modqueue.php", {
                    //         action: "request_beecock",
                    //         threadid: threadID,
                    //         postid: paramObj.postid,
                    //         userid: userObj.userid
                    //     });
                    //     console.log(newUrl)
                    //         }
                    //     );
console.log(forumO.forumid)
                    if (forumO.forumid == "26") $(result).append('<button class="sanBeecock">BEECOCK!</button> <i style="display:none; margin:auto;" class="fa fa-1x fa-spinner searchSpinner"></i>');

                    })
                // $("li.search_result").append('<button class="sanBeecock">BEECOCK!</button> <i style="display:none; margin:auto;" class="fa fa-2x fa-spinner searchSpinner"></i>');
                            // $("body").on("click", "button.beecock", function(event) {
                            //     // console.log(event)
                            // })
                $("button.sanBeecock").click(function(event) {
                    // console.log(event)
                    event.preventDefault();
                    console.log(event)
                        $(event.target).closest("li.search_result").find("i.searchSpinner").show("slow");
                                                $(event.target).closest("li.search_result").find("i.searchSpinner").addClass("fa-pulse");

                        var postLink = $(event.target).closest("li.search_result").find("a.threadtitle")[0].href;
                        var paramsTemp = $.param.querystring(postLink);
                        var paramObj = $.deparam(paramsTemp)
                        var useridLink = $(event.target).closest("li.search_result").find("a.username")[0].href;
                        var userParam = $.param.querystring(useridLink);
                        var userObj = $.deparam(userParam)
                        var threadID;
                        $.get(postLink,
                            function(data) {
                                threadID = $(data).find("#thread").attr("class").substring(7);
                                if (threadID == undefined || paramObj.postid == undefined || userObj.userid == undefined){
                                    console.log("something was undefined")
                                    console.log(threadID)
                                    console.log(paramObj.postid)
                                    console.log(userO.userid)
                                                                                    $(event.target).closest("li.search_result").find("i.searchSpinner").hide("slow");
        // $(event.target).closest("li.search_result").find("i.searchSpinner").css("color", "green")
                                                                        $(event.target).closest("li.search_result").find("i.searchSpinner").removeClass("fa-pulse");
                                                                                                            $(event.target).css("background-color", "red");
                                                                        $(event.target).css("color", "white");
                                } 
                                else{
                                    newUrl = $.param.querystring("https://forums.somethingawful.com/modqueue.php", {
                                        action: "request_beecock_post",
                                        threadid: threadID,
                                        postid: paramObj.postid,
                                        userid: userObj.userid
                                    });
                                    console.log(newUrl)
                                    $.post(newUrl,
                                        function(data) {
                                            console.log("postcocked post")
                                        }
                                    );
                                }

                                                $(event.target).closest("li.search_result").find("i.searchSpinner").hide("slow");
        // $(event.target).closest("li.search_result").find("i.searchSpinner").css("color", "green")
                                                                        $(event.target).closest("li.search_result").find("i.searchSpinner").removeClass("fa-pulse");
                                                                        $(event.target).css("background-color", "green");
                                                                        $(event.target).css("color", "white");
                            }
                        );


                    console.log($(event.target).closest("li.search_result"))
                    console.log($(event.target).parent())

                })
            }
                    }

        function threadActions() {

            // vimeo larger size
            $(".bbcode_video").each(function(index, image) {
                $this = $(image)
                $("object").attr("width", 640)
                $("object").attr("height", 360)
            })

            $("#switchpos").click(function(event) {
                var mg = chrome.extension.getURL("css/megreen.css")
                var ma = chrome.extension.getURL("css/meamber.css")
                if ($("#blarf219").attr("href") == "/css/219a.css") {
                    amberPos = true;
                    $("#yplus").attr("href", mg);
                    // $headS.append('<link id="yplus" rel="stylesheet" href="' + mg + '" type="text/css" />');
                } else {
                    amberPos = false;
                    $("#yplus").attr("href", ma);
                    // $headS.append('<link id="yplus" rel="stylesheet" href="' + ma + '" type="text/css" />');
                }

                $postS.each(function(index, image) {
                    $this = $(image);
                    processPost(image)
                    // if (g.quote) $this.highlightQuotes();
                })
            })

            // $("td.postlinks").each(function(index, value) {
            //     $this = $(value)
            //     $(value).find("ul.postbuttons").prepend('<input type="button" class="sanQuickReply" value="Quick"/>').prepend('<input type="button" class="empty" value="Emptyquote!"/>');
            // })

            // $('.empty').click(function(event) {
            //     var a = $(this).parents('.post');
            //     var geg = new RegExp("(threadid=)([0-9]+)")
            //     var rep = $(a).find("img[alt='Quote']")[0].parentNode.href
            //     $.get(rep,
            //         function(data) {
            //             $this = $(data)
            //             $this.find("input[name='submit']").trigger('click')
            //         }
            //     );
            //     return false
            // });

            //signature check option
            $(':checkbox').each(function(index, element) {
                var name = this.name;
                if (name == "signature") element.checked = g.signature;
            });

            if (window.location == "https://forums.somethingawful.com/newreply.php") processPost($("div.inner.postbody")[0])

            quickReply();
            // shortcutKeys();
            imgurUpload();
            streamingMode();
            return 1;
        }

        

        function forumIndexActions() {

            //adding the favourite forums
            $("tr.section:first-of-type").before('<tr class="section" id="favouriteForums"><th class="category" colspan="2">Favourites - Click here to collapse category</th><th class="moderators">Moderators</th></tr>')

            $("tr.forum").find("td.title").prepend('<input style="float:right;" type="button" class="sb" value="Add"/>')

            if (window.location == 'https://forums.somethingawful.com/' || window.location == 'https://forums.somethingawful.com/index.php') {

                $.each(g.fflist, function(index, thing) {
                    var geg = new RegExp("forum ([a-zA-Z0-9_]+)")
                    var g = geg.exec(thing)
                    if (g != null) {
                        $this = $("." + g[1])
                        $this.attr("class", $this.attr("class") + " favourite")
                        $("#favouriteForums").after($this)
                        $this.find("input").remove()
                    }
                })
            }

            $(".favourite").find("td.title").prepend('<input style="float:right;" type="button" class="sb" value="Delete"/>')

            $('.sb').click(function(event) {
                var a = $(this).parents('.forum');

                if ($(a[0]).find(".sb").attr("value") == "Add") {
                    var t = g.fflist
                    a.attr("class", a.attr("class") + " favourite")
                    t[a.attr("class")] = a.attr("class")
                    a.find("input").remove()
                    $("#favouriteForums").after(a[0])
                    chrome.storage.sync.set({
                        "fflist": t
                    }, function() {});
                } else {
                    var t = g.fflist;
                    delete t[a.attr("class")]
                    chrome.storage.sync.set({
                        "fflist": t
                    }, function() {});
                    a.remove()
                }
            });

            $("#forums").click(function(event) {
                $this = $(event.target)

                if ($this.attr("class") == "category") {
                    var c = event.target.innerText;
                    var geg = new RegExp("([A-Za-z0-9 ]+) -")
                    var fname = geg.exec(c)
                    var main;
                    main = !g.cats[fname[1]]
                    g.cats[fname[1]] = main;
                    if (!main){
                        event.target.innerText = fname[1] + " - Click here to expand category"
                        $this.parent().nextUntil("tr.section").slideUp("slow");
                    } 
                    else{
                        event.target.innerText = fname[1] + " - Click here to collapse category"
                        $this.parent().nextUntil("tr.section").slideDown("fast");
                    } 
                    // $this.parent().nextUntil("tr.section").toggle("fast");
                    var h = g.cats;
                    chrome.storage.sync.set({
                        "cats": g.cats
                    }, function() {});
                }
            });

            $(".category").each(function(index, image) {
                $this = $(image);
                var geg = new RegExp("([A-Za-z0-9]+) -")
                var fname = geg.exec(image.innerText)
                if (fname == null) fname = ["whatever", image.innerText]
                var main;
                main = g.cats[fname[1]]
                $this.parent().nextUntil("tr.section").toggle(g.cats[fname[1]]);
                if (!main) $this[0].innerText = fname[1] + " - Click here to expand category"
                else $this[0].innerText = fname[1] + " - Click here to collapse category"

            });

            if (g.tree) {
                $(".subforums").children().each(function(index, image) {
                    $this = $(image);
                    if ($this[0].className != '') {
                        $this.parent().parent().attr('style', 'padding-top:15px !important; padding-bottom:15px !important;')
                        $this.parent().parent().text().replace(/^[, ]/g, 'asdasdas');
                        $this.wrap('<li style = "padding-left:50px !important">')
                        $this.attr("style", "font: 11px Verdana,Arial,sans-serif !important;");
                    } else $this.parent().parent().attr('style', 'padding-top:10px !important; padding-bottom:10px !important;')
                });
            }
    if ($("#forums tr.forum_26").length){
        g.fyadMods = []; //if on index page, reset mod list
        $("#forums tr.forum_26").find("td.moderators a").each(function(index, mod){
            console.log($(mod).text())
            g.fyadMods.push($(mod).text())
        })
        chrome.storage.sync.set(g, function() {});
    } 
            return 1;
        }

        function imgurUpload() {
            var holder = $('#holder');
            var holders = document.querySelectorAll('textarea[name="message"]');
            [].forEach.call(holders, function(col) {
                col.addEventListener("drop", ondrop, false);
                col.addEventListener("dragleave", ondragleave, false);
                col.addEventListener("dragover", ondragover, false);
                col.addEventListener("dragstart", ondragstart, false);
                col.classList.remove("hover")
            });

            $('textarea[name="message"]').after('<div id="loading"><i id="loadingSpinner" style="display:none;" class="fa fa-5x fa-spinner"></i><i id="error" style="display:none;" class="fa fa-5x fa-exclamation-triangle"></i></div>')

            $('textarea[name="message"]').on("dragenter dragstart dragend dragleave dragover drag drop", function(e) {
                e.preventDefault();
            });

            function ondragover() {
                this.className = 'hover';
                $("#loadingSpinner").show("slow")
                $('textarea[name="message"]').focus();
                console.log("hey")
                return false;
            };

            function ondragstart() {
                return false;
            };

            function ondragleave() {
                this.className = '';
                $("#loadingSpinner").hide("slow")
                return false;
            };

            function ondrop(e) {
                if (e.stopPropagation) {
                    e.stopPropagation(); // Stops some browsers from redirecting.
                }
                this.className = '';
                var file = e.dataTransfer.files[0]
                if (file == undefined) {
                    $("#loadingSpinner").addClass("fa-pulse")
                    $.ajax({
                        url: 'https://api.imgur.com/3/image',
                        headers: {
                            'Authorization': 'Client-ID 5ec0c957e0413ff'
                        },
                        type: 'POST',
                        data: {
                            'image': e.dataTransfer.getData('text'),
                            'type': 'URL'
                        },
                        success: function(data) {
                            var embedImage = "[img]" + data.data.link + "[/img]"
                            var caretPos = $('textarea[name="message"]').getSelection().start;
                            var textAreaTxt = $('textarea[name="message"]').val();
                            $('textarea[name="message"]').val(textAreaTxt.substring(0, caretPos) + embedImage + textAreaTxt.substring(caretPos));
                            $("#loadingSpinner").removeClass("fa-pulse")
                            $("#loadingSpinner").hide("slow")
                        }
                    })
                }

                var reader = new FileReader();

                reader.onload = function(event) {
                    $("#loadingSpinner").addClass("fa-pulse")

                    $.ajax({
                        url: 'https://api.imgur.com/3/image',
                        headers: {
                            'Authorization': 'Client-ID 5ec0c957e0413ff'
                        },
                        type: 'POST',
                        data: {
                            'image': event.target.result.substring(22),
                            'type': 'base64'
                        },
                        success: function(data) {
                            var embedImage = "[img]" + data.data.link + "[/img]"
                            var caretPos = $('textarea[name="message"]').getSelection().start;
                            var textAreaTxt = $('textarea[name="message"]').val();
                            $('textarea[name="message"]').val(textAreaTxt.substring(0, caretPos) + embedImage + textAreaTxt.substring(caretPos));
                            $("#loadingSpinner").removeClass("fa-pulse")
                            $("#loadingSpinner").hide("slow")
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $("#loadingSpinner").removeClass("fa-pulse")
                            $("#loadingSpinner").hide("slow")
                            $("#error").show("slow")
                        }
                    });
                };
                reader.readAsDataURL(file);
                return false;
            };

            $('textarea[name="message"]').pasteImageReader(function(results) {
                var dataURL, filename;
                $("#loadingSpinner").show("slow");
                $("#loadingSpinner").addClass("fa-pulse")
                $.ajax({
                    url: 'https://api.imgur.com/3/image',
                    headers: {
                        'Authorization': 'Client-ID 5ec0c957e0413ff'
                    },
                    type: 'POST',
                    data: {
                        'image': results.dataURL.substring(22),
                        'type': 'base64'
                    },
                    success: function(data) {
                        var embedImage = "[img]" + data.data.link + "[/img]"
                        var caretPos = $('textarea[name="message"]').getSelection().start;
                        var textAreaTxt = $('textarea[name="message"]').val();

                        $('textarea[name="message"]').val(textAreaTxt.substring(0, caretPos) + embedImage + textAreaTxt.substring(caretPos));
                        $("#loadingSpinner").removeClass("fa-pulse")
                        $("#loadingSpinner").hide("slow")
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        $("#loadingSpinner").removeClass("fa-pulse")
                        $("#loadingSpinner").hide("slow")
                        $("#error").show("slow")
                    }
                });
                return filename = results.filename, dataURL = results.dataURL, results;
            });
        }

        function updatePostCount(inc) {
            postCounter = 0;
            $(".post").each(function(index, image) {
                postCounter++;
            })
            if ((postCounter % 40) != 0) inc = false;
            return {postCounter:postCounter, inc:inc}
        }

        function streamingMode(){

            streamingVideoOverlay(); //call this function to setup the video overlay portion of streaming mode

            var postCounter = 0;
            $(".post").each(function(index, image) {
                postCounter++;
                $this = $(image)
            })

            var inc = false;
            var qs = $.param.querystring();
            var myObj = $.deparam(qs)
            if (isNaN(parseInt(myObj.pagenumber))) myObj.pagenumber = 1

            if ((postCounter % 40) == 0 && inc == false) {
                inc = true;
                myObj.pagenumber = parseInt(myObj.pagenumber) + 1;
            }

            $(".threadbar").find("ul.postbuttons").prepend('<li><input type="button" class="sanQuickReply" value="Quick"/></li>').prepend('<li><input type="button" class="turbo" value="Livestream"/></li>') //DISABLED FOR NOW

            var lastPost = parseInt($(".post").last().attr("data-idx"));
            var turbo = false;
            var intID;
            $('.turbo').click(function(event) {
                turbo = !turbo

                if (turbo) {
                    $("#header").slideDown()
                    $("#container").addClass("turboC")
                    $(".turbo").attr("style", "color:#EACF4C!important;border: 1px solid #EACF4C!important;")
                    intID = setInterval(function() {
                        incValues = updatePostCount(inc);
                        postCounter = incValues.postCounter;
                        inc = incValues.inc;
                        console.log(postCounter, inc)

                        if ((postCounter % 40) == 0 && inc == false) {
                            inc = true;
                            myObj.pagenumber = parseInt(myObj.pagenumber) + 1
                        }
                        newUrl = $.param.querystring(window.location.href, {
                            threadid: myObj.threadid,
                            pagenumber: myObj.pagenumber
                        });
                        inc = false;
                        console.log(lastPost)
                        $.get(newUrl,
                            function(data) {
                                appendPosts(data)
                            }
                        );
                    }, 7000);
                } else {
                    $(".turbo").attr("style", "color:#57FF57!important;border: 1px solid #57FF57!important;")
                    $("#testDrag").slideUp()
                    $("#header").slideUp()
                    $("#container").removeClass("turboC")
                    $("#testDrag").empty();
                    clearInterval(intID)
                }
            })

            function streamingVideoOverlay(){

                $("body").prepend('<div id="header" style="display:none;">' + 'This thread will now automatically refresh and add new posts as they are made roughly every 10 seconds. New posts that have not been seen will be highlighted with a green background.<br>Enter link to video here to have it overlayed on screen. Overlayed video can be moved, resized and made transparent. Youtube links only for now. ' +
                    '<input type="text" id="streamLink" class="form-control" placeholder="Video stream link..."><button class="btn btn-default" type="button" id="streamButton">Stream</button>'
                )

                $("#streamButton").click(function(event) {
                    var youtubeLink = YouTubeGetID($("#streamLink").val());
                    $("#copyright").after('<div id="testDrag"><i class="fa fa-arrows fa-4x"></i><div id="slider-vertical" style="height:200px;"></div><div id="hiddenContainer"></div><iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + youtubeLink + '?autoplay=1&origin=http://forums.somethingawful.com&output=embed" frameborder="0"/></div>')

                    $("#testDrag").hover(
                        function() {
                            $(".fa-arrows").fadeTo("fast", 1);
                            $("#slider-vertical").fadeTo("fast", 1);
                        },
                        function() {
                            $(".fa-arrows").fadeTo("fast", 0.1);
                            $("#slider-vertical").fadeTo("fast", 0.1);
                        }
                    );

                    $("#slider-vertical").slider({
                        orientation: "vertical",
                        range: "min",
                        min: 0.1,
                        max: 1.0,
                        value: 1.0,
                        step: 0.1,
                        slide: function(event, ui) {
                            $("#testDrag").css("opacity", ui.value)
                        }
                    });

                    $(".fa-arrows").mousedown(function() {
                        $("#hiddenContainer").show();
                        $('body').one('mouseup', function() {
                            $("#hiddenContainer").hide();
                        })
                    });

                    $("#testDrag").resizable({
                        aspectRatio: 16 / 9,
                        animate: true,
                        handles: "nw, ne, sw,se",
                        minHeight: 390,
                        minWidth: 640,
                        helper: "ui-resizable-helper",
                        start: function(event, ui) {
                            $("#hiddenContainer").show();
                        },
                        stop: function(event, ui) {
                            $("#hiddenContainer").hide();
                        }
                    });
                    $("#testDrag").draggable();
                    $("#testDrag").slideDown()
                })
            }


        }

        function appendPosts(data) {
            $this = $(data)
            if (parseInt($(data).find(".post").last().attr("data-idx")) > lastPost && parseInt($(data).find(".post").last().attr("data-idx")) != lastPost){
            $this.find(".post").each(function(index, image) {
                if (parseInt($(image).attr("data-idx")) > lastPost && parseInt($(image).attr("data-idx")) != lastPost) {
                    $(image).addClass("unseen")
                    $(image).bind('inview', function(e, isInView, visiblePartX, visiblePartY) {
                        var elem = $(this);
                        if (elem.data('inviewtimer')) {
                            clearTimeout(elem.data('inviewtimer'));
                            elem.removeData('inviewtimer');
                        }

                        if (isInView) {
                            elem.data('inviewtimer', setTimeout(function() {
                                if (visiblePartY == 'top') {
                                    elem.data('seenTop', true);
                                } else if (visiblePartY == 'bottom') {
                                    elem.data('seenBottom', true);
                                } else {
                                    elem.data('seenTop', true);
                                    elem.data('seenBottom', true);
                                }

                                if (elem.data('seenTop') && elem.data('seenBottom')) {
                                    elem.unbind('inview');
                                    elem.addClass("seen")
                                }
                            }, 500));
                        }
                    });
                    var d = $(image).find("td.postbody");
                    SAT.timg.scan(d);
                    processPost(image)
                    $(".post").last().after(image)
                    lastPost = $(image).attr("data-idx")
                }
            })
}
        // return lastPost;
        }

        function quickReplyQuote(post){
            $(post).find('img[alt="Quote"]').click(function(event) {
                
                if ( $("#sanQuickReplyContainer").css('display') != 'none' ) {
                    event.preventDefault();

                $this = $(event.target);
                
                $.get($this.parent()[0].href + '&json=1',
                    function(data) {
                        console.log(data.body);
                        var caretPos = $("#sanQuickReplyText").getSelection().start;
                        var textAreaTxt = $("#sanQuickReplyText").val();
                        $("#sanQuickReplyText").val(textAreaTxt.substring(0, caretPos) + data.body + textAreaTxt.substring(caretPos));
                        $("#sanQuickReplyContainer").fadeTo("fast", 1);
                    }
                );
            }
            });
        }

        function emptyquote(post){
            $(post).find('input[value="Emptyquote!"]').click(function(event) {
                $this = $(event.target);

                $(event.target).attr("disabled", true);
                $(event.target).parent().find(".emptySpinner").show("fast");
                $(event.target).parent().find(".emptySpinner").addClass("fa-pulse");

                var paramsTemp = $.param.querystring();
                var paramObj = $.deparam(paramsTemp)
                if (isNaN(parseInt(paramObj.pagenumber))) paramObj.pagenumber = 1

                var tempUrl = window.location.pathname + '?' + '&threadid=' + paramObj.threadid + '&pagenumber=' + paramObj.pagenumber + window.location.hash;

                $.get($this.parent().find('img[alt="Quote"]').parent()[0].href,
                    function(data) {

                        threadID = $("body").data("thread");
                        formKey = jQuery('input[name="formkey"]', data).val();
                        formCookie = jQuery('input[name="form_cookie"]', data).val();
                        threadMessage = jQuery('textarea[name="message"]', data).val();
                        e = {
                            action: 'postreply',
                            threadid: threadID,
                            formkey: formKey,
                            form_cookie: formCookie,
                            message: threadMessage
                        };

                        $.post('newreply.php?', e,
                            function(returnedData) {
                                if ( $(returnedData).find("h2")[0].innerText === "Redirecting..." ){
                                    $.get(tempUrl,
                                         function(data) {
                                             appendPosts(data)
                                            $(event.target).parent().find(".emptySpinner").hide("fast");
                                            $(event.target).parent().find(".emptySpinner").removeClass("fa-pulse");
                                         }
                                     );
                                }
                                else{
                                    $(event.target).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
                                        $(event.target).removeClass("emptyWarning")
                                    });
                                    $(event.target).addClass("emptyWarning")
                                    $(event.target).attr("disabled", false);
                                    $(event.target).parent().find(".emptySpinner").hide("fast");
                                    $(event.target).parent().find(".emptySpinner").removeClass("fa-pulse");
                                }
                        });

                    }   
                );

            })
}

        function bugfixes(){
            // this fixes the problem of clicking X posted links in Chrome
            // currently it does not work due to the SA JS
            $(document).undelegate('td.postbody a', 'click');
            $('td.postbody a.quote_link').click(function(event){

                event.stopPropagation();
                event.stopImmediatePropagation();
                var postRegex = new RegExp("#(post[0-9]*)");
                var a = postRegex.exec($( this ).attr("href"))[1];

                var f = $("#" + a);

                // if the post that you are trying to go to is on this page
                // then do the bugfix and let it scroll to that post
                if (f.length){

                    // stop the link from reloading the page when clicked
                    event.preventDefault();

                    // then figure out the amount to scroll to using the animation
                    var e = f.length ? f.offset().top : 0;
                    f.attr("id", "");
                    window.location.href = "#" + a;
                    f.attr("id", a);
                    $('html').animate(
                        {
                            scrollTop: e
                        }, 
                        150
                    )
                }

                // otherwise the post is not on this page, and we let the default anchor link behaviour
                // kick in, taking you to the right page and post
            });
        }

        function processPost(post) {
            $this = $(post)
            var postHTML = $(post).find("td.postbody")[0];
            if (postHTML === undefined) postHTML = $(post)[0].innerHTML;
            else postHTML = postHTML.innerHTML;
            var vineRegex = new RegExp("(http|https)://vine\.co/v/[A-Za-z0-9]+");
            var webmRegex = new RegExp("[:A-Za-z0-9\.\/\-\_]+\\.(webm|gifv)");

            if (vineRegex.test(postHTML) && g.vine) embedVine(post) //err but not this one yet

            if (g.quote) $this.highlightQuotes();
            if (g.boldname) $(post).highlight(localStorage.user)
            if (g.tweet) tweetButton(post)
            if (g.lazyload) lazyload(post)

            bugfixes();

            $(post).find("td.postlinks").each(function(index, value) {
                $this = $(value)

                // if (thisForum == 219) {
                if (true) {
                    
                    if ( !$(post).find(".sanQuickReply").length || !$(post).find(".empty").length) {
                        $(value).find("ul.postbuttons").prepend('<input type="button" class="sanQuickReply" value="Quick"/>').prepend('<input type="button" class="empty" value="Emptyquote!"/>').prepend('<i style="display:none; margin:auto;" class="fa fa-2x fa-spinner emptySpinner"></i>');
                    }
                }
                else $(value).find("ul.postbuttons").prepend('<input type="button" class="empty" value="Emptyquote!"/>').prepend('<i style="display:none; margin:auto;" class="fa fa-2x fa-spinner emptySpinner"></i>');
            })

            quickReplyQuote(post);
            
            $(post).find("iframe").attr("allowFullscreen", "true")

            emptyquote(post)


            return 1;
        }

        var thisForum;
        var amberPos;
        var reply = false;
        var lastPost = parseInt($(".post").last().attr("data-idx"));

        intialisation(); //run some initialisation code
        anywhereActions();
        forumIndexActions(); //then execute code that should be run on the main forum page
        threadListActions(); //and then execute the code that should be run when browsing a forums threadlist
        console.log("main")
        console.log(g.fyadMods)
        if (g.fyadMods.indexOf(localStorage.user) != -1) postcock();
        var youtubeTest = 'https://www.youtube.com/watch?v=vBecM3CQVD8';
    
        console.log("main2")
  
        //post loop
        $postS.each(function(index, post) {
            processPost(post)
        });
        threadActions(); //then finally the code that runs while drilled into the thread view, including the new reply page
    });
});