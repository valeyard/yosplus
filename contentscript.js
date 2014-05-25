$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;


  var next;

  var settings = ["iglist", "oldbread", "lazyload", "avatarHideOption", "snypeAudio", "snype", "fflist", "signature", "quote", "avatarHide", "ads", "tweet", "filter", "vine", "webm", "cats", "main", "tree", "embedTweet"];
  chrome.storage.sync.get(settings,function (obj){
    console.log(JSON.stringify(obj));
    console.log(obj);
    g = obj;

    if (g.lazyload == undefined) g.lazyload = false;
    if (g.lazyload){
    $("td.postbody").find("img").each(function(index, image){
      $this = $(image)
      var src = this.getAttribute("src")
      
      console.log(this.setAttribute("class", this.getAttribute("class") + " lazy"))
      var class1 = this.getAttribute("class")
      console.log(class1)
      this.removeAttribute("src")
      this.setAttribute("data-original", src)
    });

    $(function() {
      $("img.lazy").lazyload();
    });
  }
    // $("textarea").bind('paste', function(e) {
    //         var ctl = $(this);
    //         setTimeout(function() {
    //             //Do whatever you want to $(ctl) here....
    //             var c = ctl;
    //             c = c.val()
    //             var orig = ctl.val()
                
    //             if (/^https?:\/\//.test(c) && -1 == c.indexOf("\n") && -1 == c.indexOf("\r")) {
    //                 var e;
    //                 var h = /([^:]+):\/\/([^\/]+)(\/.*)?/.exec(decodeURI(c));
    //                 if (h) {
    //                     var f = {
    //                         scheme: h[1],
    //                         domain: h[2],
    //                         path: h[3] || "",
    //                         filename: "",
    //                         query: {},
    //                         fragment: ""
    //                     }, h = f.path.lastIndexOf("#"); - 1 != h && (f.fragment = f.path.substr(h + 1), f.path = f.path.substr(0,
    //                         h));
    //                     console.log(f)
    //                     h = f.path.lastIndexOf("?"); - 1 != h && (f.query = M(f.path.substr(h + 1)), f.path = f.path.substr(0, h));
    //                     h = f.path.lastIndexOf("/"); - 1 != h && (f.filename = f.path.substr(h + 1));
    //                     e = f
    //                 } else e = null;
    //                 var f = h = "",
    //                     g = !1,
    //                     i = e.filename.lastIndexOf("."); - 1 != i && (h = e.filename.substr(i + 1), f = e.filename.substr(0, i));
    //                 if ((i = /^([^\.]+\.)?youtu\.be$/.test(e.domain)) || /^([^\.]+\.)?youtube(-nocookie)?\.com$/.test(e.domain))
    //                     if (e.query.v) c = '[video type="youtube"', e.query.hd && (c += ' res="hd"'), e.fragment && (g = M(e.fragment), g.t && (c += ' start="' +
    //                         parseInt(g.t, 10) + '"')), c += "]" + e.query.v + "[/video]", g = !0;
    //                     else if (i || /^\/embed/.test(e.path)) c = '[video type="youtube"', e.query.hd && (c += ' res="hd"'), e.query.start && (c += ' start="' + parseInt(e.query.start, 10) + '"'), c += "]" + e.path.substr(e.path.lastIndexOf("/") + 1) + "[/video]", g = !0;
    //                     console.log(h)
    //                 if (!g) switch (h) {
    //                 case "jpg":
    //                 case "gif":
    //                 case "png":
    //                     if (/(www\.|i\.)imgur.com/i.test(e.domain)) switch (e = "", 5 < f.length && (e = f.substr(f.length - 1)), e) {
    //                     case "s":
    //                     case "l":
    //                     case "t":
    //                         c = "[url=" + (c.substr(0, c.lastIndexOf("/") + 1) + f.substr(0, f.length -
    //                             1) + "." + h) + "][img]" + c + "[/img][/url]";
    //                         break;
    //                     default:
    //                         c = "[img]" + c + "[/img]"
    //                     } else c = "[img]" + c + "[/img]"
    //                 }
    //             }
    //             //$(ctl)[0].replace(orig, c)
    //             ctl.val().replace("test", "asd")
    //             //console.log(ctl[0].val())
    //             console.log(ctl.val("ARSE"))
    //             //ctl.innerText = ctl.val()
    //         }, 100);
    // });

    // console.log(g.cats);
    // console.log(g.arse)
    // g.arse = "asds"
    // console.log(g.arse)
    // //chrome.storage.sync.set(["arse": g.arse])
    //         //chrome.storage.sync.set({"arse": g.arse},function (){});

    // $.each(settings, function(index, value){
    //   console.log(value)
    //   console.log(g[value])
    // })
    //if (g.snype == undefined) 


    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

    var forum_177 = {"\\b(daniel bryan|bryan|dbd|db)\\b":"vanilla midget", "\\bover/under\\b":"odds"};
    var forum_219 = {"\\bspongeh\\b":"bread stymie", "\\bsteve jobs\\b":"stebe jobs", "\\bandroid\\b":"anroid", "\\bgodaddy\\b":"nodaddy", "\\bValeyard\\b":"asshole", "\\apt gangbang\\b":"<marquee>apt gangbang</marquee>"};
    var forum_26 = {"\\b ralp \\b":"the talking toilet", "\\bgirls\\b":"bleeders", "\\bgbs\\b":"the moon", "\\bguys\\b":"bleeders"};
    var filters = {"forum_177": forum_177, "forum_219": forum_219 ,"forum_26": forum_26}

    //!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    
    var c = 0;
    
    var thisForum;
    var fh = document.getElementsByTagName("body")[0].getAttribute("class");
    var ge = new RegExp("(showthread|forumdisplay|newreply|forumhome)[ ]*([A-Za-z0-9_]*)")
    var te = ge.exec(fh);

    if (te ==null) thisForum = "smilie";
    else{
      var pageType = te[1];
      thisForum = te[2];
    }

    function handleDragStart(e) {
     // this.style.opacity = '0.4';  // this / e.target is the source node.
     var cols = document.querySelectorAll('.smilie');
      [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
        col.classList.remove('over');
      });
      dragSrcEl = this;
      source = this.getAttribute("id");
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    };

    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }

      e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

      return false;
    }

    function handleDragEnter(e) {
    }

    function handleDragLeave(e) {
      this.classList.remove('over');  // this / e.target is previous target element.

    }

    function handleDrop(e) {
      // this/e.target is current target element.

      if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
      }

      if (dragSrcEl != this) {

        var att1=document.createAttribute("id");

        if (dragSrcEl.getAttribute("id") == "basic"){
          att1.value="favourite";
          dragSrcEl.setAttributeNode(att1);;
          $('.standard').find('.smilie_group').append(dragSrcEl);
          localStorage.favourite = $('.standard').find('.smilie_group')[0].innerHTML;
        }

        else{
          var title = dragSrcEl.innerText;
          $('.standard').find('.smilie_group').remove(dragSrcEl);
          $(".smilie").each(function(index, image) {
            $this = $(image);
            if (title == image.innerText && this.getAttribute("id")=="favourite"){
              this.remove();
              localStorage.favourite = $('.standard').find('.smilie_group')[0].innerHTML;
            }
          });
        }
      }
      return false;
    }

    function handleDragEnd(e) {
      // this/e.target is the source node.
      [].forEach.call(cols, function (col) {
        col.classList.remove('over');
      });
    }
    if (g.avatarHide == undefined) g.avatarHide = false;

    $( ".userinfo" ).each(function(index, image) {
      $this = $(image)
      console.log(g.avatarHide + "GOOD BOY")

      $(".title").toggle(g.avatarHide)
      //g.avatarHide = !g.avatarHide;

    });
    var igName = g.iglist
    $( "input.bginput" ).each(function(index, image) {
      $this = $(image)
      if ($this.attr("type") == "text") var name = $this.attr("value")
      if (name != undefined) igName.push(name)
      console.log(igName)

      //g.avatarHide = !g.avatarHide;

    });
    console.log(g.iglist)
    chrome.storage.sync.set({"iglist": igName})
    console.log(g.iglist)

    var audioPath = chrome.extension.getURL("audio/Headshot.wav");
    console.log(audioPath)
    $("body").prepend('<audio id="audio" src=' + audioPath + ' ></audio>')

    var amberPos;
    if ($("#blarf219").attr("href") == "/css/219a.css"){
      amberPos = true;
    }
    else{
      amberPos = false;
    }
    if (g.signature == undefined) g.siganture = false;
    //window.addEventListener("keyup", function(e){ if(e.keyCode == 27) history.back(); })
    $(':checkbox').each(function(index, element) {
        var name = this.name;
        console.log(name)
        console.log(g.signature)
        if (name == "signature") element.checked = g.signature;
    });

    //if (amberPos == null) amberPos = false;
    if (g.quote == undefined) g.quote = true;
    $("#switchpos").click(function(event) {
      console.log($("#blarf219").attr("href"))
      if ($("#blarf219").attr("href") == "/css/219a.css"){
        amberPos = true;
      }
      else{
        amberPos = false;
      }
      
      console.log(amberPos)
      
      $(".post").each(function(index, image) {
        $this = $(image);
        console.log($this.wrap("<div>"))
        console.log("LOl")
        if (g.quote) $this.myfunction();
      })
    })
    
  

    var ff = '<tr class="forum forum_268"><td class="icon"><a href="forumdisplay.php?forumid=268"><img src="http://fi.somethingawful.com/forumicons/byob.gif" title="118527 replies in 4674 threads" alt=""></a></td><td class="title"><a class="forum" href="forumdisplay.php?forumid=268" title="Want to have a good time with friends online? Step in and have a chat. Chill out and enjoy yourselves online.">BYOB 8.2</a><div class="subforums"><b>SUBFORUMS:</b> (None)<input style="float:right;" type="button" class="sb" value="Add"></div></td><td class="moderators"><a href="member.php?action=getinfo&amp;userid=85738">Jett</a>, <a href="member.php?action=getinfo&amp;userid=173896">Arnold of Soissons</a></td></tr>'
    //$("#forums").console.log($this)
    //var jQueryObject = $('<div></div>').html( ff ).children();
    //var $jQueryObject = $($.parseHTML(ff));
    //var fflist = [$jQueryObject[0]];
    //console.log(fflist)
    // $("tr.forum").each(function(index, thing){
    //   console.log(thing)
    // })
    //$("#forums").find("table").prepend('<th class="category" colspan="2">Test - Click here to collapse category</th>')
    console.log($("tr.section:first-of-type").before('<tr class="section" id="favouriteForums"><th class="category" colspan="2">Favourites - Click here to collapse category</th><th class="moderators">Moderators</th></tr>'))
    $(".category").each(function(index, image){
      console.log(image)
      $this = $(image)
     // $this.prepend("test")
    })
    var postCounter = 0
    $(".post").each(function(index, image){
      postCounter++;
      $this = $(image)
     // $this.prepend("test")
     // $.get( "http://forums.somethingawful.com/newreply.php?action=newreply&threadid="+g[2],
     //         function(data) {
     //           //console.log(data)
     //            

     //         }
     //     );
    })

    console.log(postCounter)
    console.log(window.location.href)
    // Serializing a params string using the built-in jQuery.param method.
    // myStr is set to "a=1&b=2&c=true&d=hello+world"
    

    // Deserialize the params string into an object.
    // myObj is set to { a:"1", b:"2", c:"true", d:"hello world" }
    //var myObj = $.deparam( window.location.href );
    //var myStr = myObj.param({ pagenumber:5444 });
    var qs = $.param.querystring();
    var myObj = $.deparam( qs )
    console.log(myObj)
    //var myStr = $.param({ myObj.threadid, myObj.pagenumber + 1 });
    //var myStr = $.param({ threadid:myObj.threadid, pagenumber:parseInt(myObj.pagenumber) +1 });
    //console.log(myStr)
    var inc = false;
    //'<div style="padding-top:5px; padding-right:5px;"> <input style="float:right;" type="button" class="turbo" value="TURBO!"/></div>'
    //<li><img src="http://fi.somethingawful.com/images/buttons/button-bookmark.png" alt="Bookmark" class="thread_bookmark bookmark" title="Bookmark thread"></li>
    function countPost(){
      postCounter=0;
      $(".post").each(function(index, image){
      postCounter++;
      })
      if ((postCounter%40)!=0) inc = false;
    }

    if ((postCounter%40)==0 && inc==false){
      inc = true;
      myObj.pagenumber = parseInt(myObj.pagenumber)+1
    }
    var turbo = false;
    $(".threadbar").find("ul.postbuttons").prepend('<div style="padding-top:5px; padding-right:5px;"> <input style="float:right;" type="button" class="turbo" value="TURBO!"/></div>')
    $('.turbo').click(function(event) {
      turbo = !turbo
      //$(".turbo").css("color","#EACF4C!important;")
      //$(".turbo").attr("style", $(".turbo").attr("style") + "color:#EACF4C!important;border: 1px solid #EACF4C!important;" )
      if (turbo){
        $(".turbo").attr("style", $(".turbo").attr("style") + "color:#EACF4C!important;border: 1px solid #EACF4C!important;" )
        setInterval(function() {
          countPost();
          console.log("POST COUNT " + postCounter)
          console.log((postCounter%40)==0)
         // if ((postCounter%40)==0) myObj.pagenumber = parseInt(myObj.pagenumber)+1
         if ((postCounter%40)==0 && inc==false){
           inc = true;
           myObj.pagenumber = parseInt(myObj.pagenumber)+1
         }
          newUrl = $.param.querystring( window.location.href, { threadid:myObj.threadid, pagenumber:myObj.pagenumber } );
          $.get( newUrl,
                  function(data) {
                    multiply(data)              
                  }
              );
        }, 10000);
      }
      else $(".turbo").attr("style", $(".turbo").attr("style") + "color:#57FF57!important;border: 1px solid #57FF57!important;" )
    })
    var newUrl = $.param.querystring( window.location.href, { threadid:myObj.threadid, pagenumber:myObj.pagenumber } );
    console.log(newUrl)



    function multiply(y) {
      $this = $(y)
      //console.log(y)
      //console.log([0])
      $this.find(".post").each(function(index, image){
        //console.log(image)
        if ($(image).attr("id") > $(".post").last().attr("id") ) $(".post").last().after(image)
      })

    }

    $("tr.forum").find("td.title").prepend('<input style="float:right;" type="button" class="sb" value="Add"/>')
    if (window.location == 'http://forums.somethingawful.com/' || window.location == 'http://forums.somethingawful.com/index.php'){
    console.log($(".favourite")[0])
    if (g.fflist == undefined) g.fflist = {};
        $.each(g.fflist, function(index, thing){
          var geg = new RegExp("forum ([a-zA-Z0-9_]+)")
          var g = geg.exec(thing)
          if (g!=null){
            console.log($("."+g[1]))
            $this = $("."+g[1])
            $this.attr("class", $this.attr("class") + " favourite")
            $("#favouriteForums").after($this)
            console.log($this.val())
            console.log($this.find("input").remove())
            // if ($this.val() === "Add") {
            //   $this.remove();
            // }
          }
          
      
    })
      }
        console.log("224")
   $(".favourite").find("td.title").prepend('<input style="float:right;" type="button" class="sb" value="Delete"/>')
   console.log( $(".favourite"))
    $('.sb').click(function(event) {
      var a = $(this).parents('.forum');
      console.log(a[0])
      console.log($(a[0]).find(".sb").attr("value"))
      if ($(a[0]).find(".sb").attr("value")=="Add"){
        //$(a[0]).find(".sb").attr("value", "Delete")
        var t = g.fflist
        //console.log(a[0].outerHTML)

        ////t[a.attr("class")]=(a[0].outerHTML)
        ////$("#favouriteForums").after(a[0])
        a.attr("class", a.attr("class") + " favourite")
        t[a.attr("class")]=a.attr("class")
        console.log(a.find("input").remove())
        //a.find(".subforums").append('<input style="float:right;" type="button" class="sb" value="Delete"/>')
        $("#favouriteForums").after(a[0])

        //console.log(t)

        chrome.storage.sync.set({"fflist": t},function (){
      });
       // console.log(g.fflist[0])
       // $("#favouriteForums").after(a[0])
      }
      else{
        var t = g.fflist;
        delete t[a.attr("class")]
                chrome.storage.sync.set({"fflist": t},function (){
      });
        //delete g.fflist[]
        console.log(a.remove())
        
        console.log("HEY DELETE")
      }
    });
    //console.log(g.fflist[0])
    if (thisForum == "forum_219"){
    if (g.snype == undefined) g.snype = false;
    if (g.snypeAudio == undefined) g.snypeAudio = true;
    if (g.snype){
    $("tr.thread").each(function(index, value){
      console.log(value)
      $this = $(value)
      var replies = $this.find("td.replies")[0].innerText
      console.log(replies)
      if (replies < 40){
        if (replies%40 == 39) $(value).find(".title_inner").prepend('<div style="padding-top:5px; padding-right:5px;"> <input style="float:right;" type="button" class="snype" value="Snype"/></div>')
      }
      else if (replies == 0){}
      else{
        if (replies%40 == 39) $(value).find(".title_inner").prepend('<div style="padding-top:5px; padding-right:5px;"> <input style="float:right;" type="button" class="snype" value="Snype"/></div>')
      }
     // $(value).find(".title").append('<input style="float:right;" type="button" class="snype" value="Snype"/>')
    })

     $('.snype').click(function(event) {
      var audio = document.getElementById("audio");
          if (g.snypeAudio) audio.play();
      var a = $(this).parents('tr.thread');
      console.log(a)
      console.log(a.find("a")[3].href)
      var geg = new RegExp("(threadid=)([0-9]+)")
      console.log(a.find(".snype").remove())
      $.each(a.find("a"), function(index, value){
        console.log(value.href)
              var g = geg.exec(value.href);
      console.log()
      if (g!=null){
        console.log(g[2])
        $.get( "http://forums.somethingawful.com/newreply.php?action=newreply&threadid="+g[2],
                function(data) {
                  //console.log(data)
                    formKey = jQuery('input[name="formkey"]', data).val();
                    formCookie = jQuery('input[name="form_cookie"]', data).val();
                    console.log(formKey);
                    console.log(formCookie);
                    var textArray = [
                        'snype',
                        'headshot',
                        ':bsdsnype:'
                    ];
                    var randomNumber = Math.floor(Math.random()*textArray.length);
                    e = {
                        action: 'postreply',
                        threadid: g[2],
                        formkey: formKey,
                        form_cookie: formCookie,
                        message: textArray[randomNumber]
                    };
                    console.log(e)

                    // $.post('newreply.php?', e, 
                    //     function(returnedData){
                    //          console.log(returnedData);
                    // });

                }
            );
        return false
      }
      })

      // if (g!=null){


      // }
    });

    }

  }

    console.log($("#favouriteForums")[0])
    var back = "empty"
    var forward = "empty"

    var top = $.find(".top")[0]
    console.log(top)
    $(top).find("a").each(function(index, thing){
      var geg = new RegExp("(pagenumber=)([0-9]+)")

      var g = geg.exec($(thing).attr("href"))
      if (geg.test($(thing).attr("href"))){
        console.log($(thing)[0].innerText)
        if ($(thing)[0].innerText =="‹"){
          back = $(thing).attr("href")
        } 
        if ($(thing)[0].innerText =="›"){
          forward = $(thing).attr("href")
        } 
      }
    })
    window.addEventListener("keyup", function(e){ 
      if(e.keyCode == 65){
        if (back != "empty") window.location = back;
      }
    })
    window.addEventListener("keyup", function(e){ 
      if(e.keyCode == 68){
          if (forward != "empty") window.location = forward;
      }
    })

    if (g.avatarHideOption == undefined) g.avatarHideOption = true;
    console.log(g.avatarHideOption)
    if (g.avatarHideOption){
      $( ".userinfo" ).click(function(event) {
        $this = $(event.target)

        event.stopPropagation();  
        $(".title").toggle()
        var jet = !g.avatarHide;
        chrome.storage.sync.set({"avatarHide": jet},function (){
        });
      });
    }

    if (g.ads == undefined) g.ads = true;
    if (g.ads) $("#ad_banner_user").remove()
      console.log("here?")
    $(".category").each(function(index, image){
      $this = $(image);

      var geg = new RegExp("([A-Za-z0-9]+) -")

      var fname = geg.exec(image.innerText)
      if (fname == null) fname =  ["whatever", image.innerText]
      var main;
      main = g.cats[fname[1]]

      $this.parent().nextUntil("tr.section").toggle(g.cats[fname[1]]);
      if (!main) $this[0].innerText = fname[1] + " - Click here to expand category"
      else $this[0].innerText = fname[1] + " - Click here to collapse category"

    });
    if (g.tree == undefined) g.tree = false;
    if (g.tree){
      $(".subforums").children().each(function(index, image){

        $this = $(image);

        if ($this[0].className != ''){

          console.log($this.parent().parent().attr('style', 'padding-top:15px !important; padding-bottom:15px !important;') + " L")
          $this.parent().parent().text().replace(/^[, ]/g, 'asdasdas');
          console.log($this.parent().parent().text() + "LOOOOL")
          
          $this.wrap('<li style = "padding-left:50px !important">')
          $this.attr("style", "font: 11px Verdana,Arial,sans-serif !important;" );
        }

        else $this.parent().parent().attr('style', 'padding-top:10px !important; padding-bottom:10px !important;')
      });
    }

    var fya = $.find("tr.forum.forum_26")[0];
    var $terry = $(fya);

    if (g.cats == undefined) g.cats = {"Favourites":true, "Main": true, "Discussion": true, "The Finer Arts": true, "The Community": true, "Archives": true}
    $( "#forums" ).click(function(event) {
      $this = $(event.target)

      if ($this.attr("class") == "category"){

        var c = event.target.innerText;
        var geg = new RegExp("([A-Za-z0-9 ]+) -")
        console.log()
        var fname = geg.exec(c)
        var main;
        main = !g.cats[fname[1]]
        g.cats[fname[1]] = main;
        //console.log("here?")
        //console.log(fname[1] + "OMG WINNININING")
        if (!main) event.target.innerText = fname[1] + " - Click here to expand category"
        else event.target.innerText = fname[1] + " - Click here to collapse category"
        $this.parent().nextUntil("tr.section").toggle();

        var h = g.cats;
        chrome.storage.sync.set({"cats": g.cats},function (){
        });
        //console.log(g.cats)
      }

    });


    // $("tr.forum_26").each(function(index, image){
    //   $this = $(image);

    //   var tweetText = $(this).find(" a.forum")[0].setAttribute("title", "LMAO");
    //   $(this).find(" a.forum")[0].innerText = "FYAD: cherry blossom petal landed in the lunch"
    //   $(this).find(" a.forum_154")[0].setAttribute("title", "LMAO");
    //   $(this).find(" a.forum_154")[0].innerText = "Synthy's overflowing stomach"
    // });


    $(".smilie_list").each(function(index, image) {
    	$this = $(image);

    	var group = '<br><br><h3>Favourite Smilies</h3> <ul class="smilie_group">';
    	var groupEnd = '</ul><br><br><br><br><br><br>'
      var ht = '<h3>Basic Smilies</h3> <ul class="smilie_group"> <li class="smilie"> <div class="text">:(</div> <img alt="" src="http://fi.somethingawful.com/images/smilies/frown.gif" title="frown"> <li class="smilie"> <div class="text">:)</div> <img alt="" src="http://fi.somethingawful.com/images/smilies/smile.gif" title="smile"> </ul>';
    	$(this).find(".inner").prepend(group + localStorage.favourite + groupEnd)
      var cols = document.querySelectorAll('.smilie');
      [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
      });
    });

    $(".smilie").each(function(index, image) {
    	$this = $(image);

    	var att=document.createAttribute("draggable");
    	att.value="true";
    	this.setAttributeNode(att);;

      var att1=document.createAttribute("id");

      if (this.getAttribute("id") != "favourite"){
        att1.value="basic";
        this.setAttributeNode(att1);;
      }
    });



    if (g.oldbread == undefined) g.oldbread = false;
    if (g.oldbread){
    var bc = document.querySelectorAll(".breadcrumbs > span.mainbodytextlarge");
    for (i = 0; i < bc.length; i++)
    {
        if (bc[i].childNodes[0].tagName.toLowerCase() == "b")
        {
            bc[i].parentNode.insertBefore(bc[i].childNodes[0], bc[i]);
            bc[i].parentNode.removeChild(bc[i]);
            continue;
        }
        else
        {
            var bcup = bc[i].querySelector("a.up");
            if (bcup.childNodes.length > 1)
            {
                b = document.createElement("b");
                //b.appendChild('<a class="index" href="/" title="Forums index">«</a>')
                var c = bc[i].querySelectorAll(".up span a");
                for (j = 0; j < c.length; j++)
                {
                    b.appendChild(c[j]);
                    b.appendChild(document.createTextNode(" › "));
                }

                var bclast = bc[i].querySelector(".bclast");
                if (bclast) b.appendChild(bclast.cloneNode(true));

                while (bc[i].childNodes.length > 0)
                {
                    bc[i].removeChild(bc[i].childNodes[0]);
                }
                //console.log(b.append('<a class="index" href="/" title="Forums index">«</a>'));
                bc[i].appendChild(b);
            }
        }
    }
    $("span.mainbodytextlarge").prepend('<a class="index" href="/" title="Forums index">«</a>');
  }
   //$(".breadcrumbs").each(function(index, image) {
     //$this = $(image);
     //console.log($this.find("mainbodytextlarge")[0])
     //console.log($("span.mainbodytextlarge").contents().get(0).nodeValue)
     //console.log($("span.mainbodytextlarge").clone().children().remove().end().text() = "asds")
     //$("span.mainbodytextlarge").prepend('<a class="index" href="/" title="Forums index">«</a>');
     // console.log($this.find("a.up")[0].outerHTML = $this.find("a.up")[0].innerHTML)/// = $this.find("a.up")[0].innerHTML
     // $this.find("span a").each(function(index, te) {
     //   $this = $(te);
     //   $this.after(" › ")
     //   console.log(this)
     // });
   //});

    $(".mainbodytextsmall").each(function(index, image) {
    	$this = $(image);

     	var y = new RegExp("Hello, ([A-Za-z0-9]+)!")
     	var g = y.exec(this.innerText);
     	
     	user = g[1];
     	localStorage.user = "";
     	localStorage.user=g[1];
    });

    $.fn.myfunction = function () {
      //console.log("into function")
     // console.log($this)
     // console.log(g.quote + " G QUOTE")
     // console.log(amberPos + " AMBERPOS")
      $this.find(".bbc-block").each(function(index, quote){
        $this = $(quote);

       // console.log(index);
      // console.log("found bbc")
        var posted = new RegExp("([A-Za-z0-9 -_]+) posted:")
        //console.log($this)
        //console.log($this[0].innerText)
       // console.log($this.find("h4"))
        //console.log($(quote).find(".h4").context)
        //var name = $this.find(".quote_link")[0].innerText
        if ($this.find("h4")[0] != null){
          var k = posted.exec($this.find("h4")[0].innerText)
         // console.log("not here")
          if (posted.test($this.find("h4")[0].innerText)){
            //console.log($this.find("h4"))
           // $h4 = $this.find("h4")
          // console.log(k[1])
            if (k[1] == localStorage.user){

            //  console.log($this.find("blockquote"))
            //  console.log($this)

               $(quote).css( "background", "rgb(204, 139, 199)" );
               $(quote).css( "background-color", "rgb(204, 139, 199)" );
              // $(quote).css( "color", "rgb(204, 139, 199)" );
               //$(quote).css( "color", "#EACF4C" );
               //$(quote).attr('style', 'color:rgb(204, 139, 199) !important');

               $this.find("blockquote").css( "color", "#000000" );

              //$(this).find(" td.postbody").css( "color", "#000000" );
            //  console.log(thisForum)
              if (thisForum != "forum_219") $(quote).find(".quote_link").css("color", "rgb(0, 20, 255)")
              else{
              //  console.log(amberPos)
                if (!amberPos){
                  $(quote).find(".quote_link").css("color", "#EACF4C")
                  $(quote).attr("style", $(quote).attr("style") + "border-bottom: 1px solid #EACF4C !important;" )
                  $(quote).attr("style", $(quote).attr("style") + "border-top: 1px solid #EACF4C !important;" )
                  $(quote).find("blockquote").attr("style", $(quote).find("blockquote").attr("style") + "color: #EACF4C !important;" )
                  $(quote).find("a").attr("style", $(quote).find("blockquote").attr("style") + "color: #EACF4C !important;" )
                  //$(quote).find("a").attr("style", $(quote).find("blockquote").attr("style") + '-webkit-keyframes animes{0%{background:#EACF4C;color:#000}50%{background:#000;color:#EACF4C}100%{background:#EACF4C;color:#000}}* !important' )
                 // $("head").append('<style>@-webkit-keyframes animess{0%{background:#EACF4C;color:#000}50%{background:#000;color:#EACF4C}100%{background:#EACF4C;color:#000}}*')
                  $(quote).find(".img").attr("style", $(quote).find(".img").attr("style") + 'border:1px solid #EACF4C !important')
                  console.log($(quote).find("img"))
                  //$(quote).attr("style", $(quote).attr("style") + "color #EACF4C !important;" )
                //  console.log($(quote).css("tr"))
                }
                else{
                  $(quote).find(".quote_link").css("color", "#57FF57")
                  $(quote).attr("style", $(quote).attr("style") + "border-bottom: 1px solid #57FF57 !important;" )
                  $(quote).attr("style", $(quote).attr("style") + "border-top: 1px solid #57FF57 !important;" )
                  $(quote).find("blockquote").attr("style", $(quote).find("blockquote").attr("style") + "color: #57FF57 !important;" )
                  //$(quote).attr("style", $(quote).attr("style") + "color #EACF4C !important;" )
                }
              } 
              //$(quote).find(".quote_link").attr($(quote).find(".quote_link").attr() + , )
              // $this.css( "color", "#2A22E2" );
              // $(quote).css( "font-weight", "bold" );

              //$this.find("h4").css( "color", "#2A22E2" );
            }
          }
        } 
        //console.log($this.find("h4")[0].innerText)
        //console.log($this.find(".quote_link")[0].innerText)
      });
    };


    // $(".up").each(function(index, value){
    //   $this = $(value).parent()[0]
    //   console.log($this)

    //   $(value).find("span").each(function(index, invalue){
    //     $(invalue).find("a").after(" > ")
    //     //console.log($(invalue)[0].innerHTML)
    //   $(invalue).parent()[0].innerHTML = $(invalue)[0].innerHTML
    //   })

    //   //console.log($this.innerText)
    //   //console.log($this.innerHTML = $this.innerHTML.replace(/ > /, "HJ"))
    //  // console.log($(value))
    //   $(value)[0].outerHTML = $(value)[0].innerHTML
    //   //console.log($(value))
    //  // console.log($(value)[0].replace(" › ", ""))


      
    // })

    if (g.embedTweet == undefined) g.embedTweet = true;
    $(".post").each(function(index, image) {
    	$this = $(image);
      //console.log($this)
     // console.log(g.quote)
      if (g.quote) $this.myfunction();
      $this.find("iframe").attr("allowFullscreen", "true")

      //console.log(g.embedTweet)
      if (g.embedTweet){
        $this.find("a").each(function(index, text){
          $this = $(text)
          //console.log(text)
          var twit = new RegExp("https://twitter.com/[:A-Za-z0-9\.\/]+/(status|statuses)/([0-9]+)");
          //console.log(text.href)
          var twitUrl = twit.exec(text.href);
          //console.log(twitUrl)
          if(twit.test(text.href)){
            console.log("made it to cached")
            console.log($this[0].outerHTML)
            $this.wrap('<div class="tweet' + twitUrl[1] + '">')
            console.log($this.parent)
            console.log($this[0].outerHTML)
            // if (localStorage.getItem(twitUrl[0]) !== null){
            //   $('.tweet' + twitUrl[1]).html(localStorage.getItem(twitUrl[0]));
            //   counter++;
            // }
           // else{
              $.ajax({
                
                url: "https://api.twitter.com/1/statuses/oembed.json?url="+twitUrl[0]+"&omit_script=true",
                async:false,
                success: function(data){
                  console.log("made it to ajaz")
                  console.log(data.html) 
                  console.log($this[0].outerHTML)
                  $this.empty()
                  console.log($this[0].outerHTML)
                  localStorage.setItem(twitUrl[0], data.html)
                  $('.tweet' + twitUrl[1]).html(data.html);
                  counter++;
                }
              });
            //}
          }
        });
      }

      // if (g.embedTweet){
      //         $this.find("a").each(function(index, text){
      //         //$(".postbody", this).each(function(index, text) {
      //           $this = $(text)
      //           var twit = new RegExp("https://twitter.com/[_:A-Za-z0-9\.\/]+/(status|statuses)/([0-9]+)");
      //           //console.log(text)
      //           var twitUrl = twit.exec(text);
      //           //console.log(twitUrl)
      //           if(twit.test(text)){
      //             console.log("made it to cached")
      //             //twitUrl[2] = twitUrl[2].trim();
      //             $this.wrap('<div class="tweetmyf' + twitUrl[1] + '" id="'+twitUrl[2]+'">')
      //              if (localStorage.getItem(twitUrl[0]) !== null){
      //               $('#'+twitUrl[2]).html(localStorage.getItem(twitUrl[0]));
      //               counter++;
      //             }
      //             else{
      //               $.ajax({
                     
      //                 url: "https://api.twitter.com/1/statuses/oembed.json?url="+twitUrl[0]+"&omit_script=false",
      //                 async:true,
      //                 success: function(data){
      //                   //console.log("made it to ajaz")
      //                   //console.log(data.html)
      //                   $this.empty()
      //                   localStorage.setItem(twitUrl[0], data.html)
      //                   $("#"+twitUrl[2]).html(data.html);
      //                   counter++;
      //                 }
      //               });
      //             }
      //           }
      //         });
      //       }



    	var text = $(this).find(" td.postbody")[0].innerHTML;
      var tweetText = $(this).find(" td.postbody")[0].innerText;
    	var author = $(this).find(" dt.author")[0].innerText;

      var x = new RegExp("(http|https)://vine\.co/v/[A-Za-z0-9]+");
      var pomf = new RegExp("[:A-Za-z0-9\.\/]+\\.webm");
      var gif = new RegExp("(http|https)://[A-Za-z0-9]+\.gfycat\.com/[A-Za-z0-9]+[\.]*[A-Za-z0-9]+\.webm");

      if (g.filter == undefined) g.filter = false;
      if (g.filter){
        for(var j in filters[thisForum]){

          var h = new RegExp(j, 'gi');

          var t = h.exec(text);


          if (t != null){
            console.log("Foundd"); //had to change t[0] to t[1] to make it work, it worked previously the other way, watch out
            $(this).find(" td.postbody")[0].innerHTML=$(this).find(" td.postbody")[0].innerHTML.replace(h, filters[thisForum][j])
          };

          var gah = new RegExp("\\b"+j+"\\b", 'gi');
          var tee = gah.exec(author);

          if (tee != null){
            console.log(tee);
            console.log($(this).find(" dt.author")[0].innerText); //had to change tee[0] to tee[1] to make it work, it worked previously the other way, watch out
            $(this).find(" dt.author")[0].innerHTML=$(this).find(" dt.author")[0].innerHTML.replace(tee[0], filters[thisForum][j])
          }
        }
      }

      tweetText = tweetText.replace(/\"/g,"&quot;");

      if (author == localStorage.user){
        //console.log(localStorage.user)
        if (g.tweet == undefined) g.tweet = true;
        if (g.tweet){
          $(this).find(" ul.postbuttons").append('<li><a href="https://twitter.com/share" class="twitter-share-button" data-url="manas" data-text="'+tweetText+'" data-count="none" data-dnt="true">Tweet</a></li>');
        } 
     	}
      var twit = new RegExp("https://twitter.com/[:A-Za-z0-9\.\/]+/status/[0-9]+");
      var twitUrl = twit.exec(text);
      var counter = 0;
      var otherCounter =0;
      if (g.webm == undefined) g.webm = true;
      if (pomf.test(text) && g.webm){
        $this = $(image);
        var postBody = $(this).find(" td.postbody")[0];
        var ur85 = pomf.exec(text);
        var sth = '<video autoplay loop width="450" muted="true" controls> <source src="'+ur85[0]+'" type="video/webm"> </video>'

        console.log($this);
        $this.find("a").each(function( index, value ) {
          console.log("finding as here")
          var jelm = $(value);
           if(value.href == ur85[0]){
           jelm.replaceWith(sth);
          }
        });
      }
      if (g.vine == undefined) g.vine = true;
      if (x.test(text) && g.vine){
        $this = $(image);
        var postBody = $(this).find(" td.postbody")[0];
        var url2 = x.exec(text);
        var sth = '<iframe class="vine-embed" src="'+url2[0]+'/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>';

        $this.find("a").each(function( index, value ) {

          var jelm = $(value);
          
          if(value.href == url2[0]){
            jelm.replaceWith(sth);
          }     
        });
      }

      //console.log($(".post").attr("class"))
      // $(".post").each(function(index, image) {
      //   $this = $(image);
      //   console.log($(image).wrap("<div>"))
      //   console.log("LOl")
      //   //if (g.quote) $this.myfunction();
      // })
    });
  });
});
