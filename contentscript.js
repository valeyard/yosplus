// a = {}
// timg = new function (e, f, a) {
//     var g = this,
//         i = function (d, f) {
//             var b = a(this).siblings("img"),
//                 c, h;
//             if (b.attr("t_width")) a(this).removeClass("expanded"), b.attr({
//                 width: b.attr("t_width"),
//                 height: b.attr("t_height")
//             }), b.removeAttr("t_width"), b.removeAttr("t_height");
//             else {
//                 a(this).addClass("expanded");
//                 b.attr({
//                     t_width: b.attr("width"),
//                     t_height: b.attr("height")
//                 });
//                 var g = b.parents("blockquote");
//                 g.length || (g = b.parents(".postbody"));
//                 c = parseInt(b.attr("o_width"), 10);
//                 h = parseInt(b.attr("o_height"), 10);
//                 g = Math.min(900, g.width());
//                 if (f && c > g) {
//                     var i = b.position(),
//                         g = (g - 3 * i.left) / c;
//                     b.attr("width", c * g);
//                     b.attr("height", h * g)
//                 } else b.removeAttr("width"), b.removeAttr("height");
//                 g = a.browser.webkit || a.browser.safari ? "body" : "html";
//                 h = a(g).scrollTop();
//                 c = b.offset().top;
//                 b = c + b.height();
//                 b - h > a(e).height() && (h = b - a(e).height());
//                 c < h && (h = c);
//                 h != a(g).scrollTop() && (a.browser.msie && 7 > parseInt(a.browser.version, 10) ? a(g).scrollTop(h) : a(g).animate({
//                     scrollTop: h
//                 }, 150))
//             }
//             return !1
//         },
//         k = function () {
//             var d = a(this);
//             if (d.hasClass("loading")) {
//                 d.removeClass("loading");
//                 var e =
//                     d[0].naturalWidth || d.width(),
//                     b = d[0].naturalHeight || d.height();
//                 if (200 > b && 500 >= e || 170 > e) d.removeClass("timg");
//                 else {
//                     d.addClass("complete");
//                     d.attr({
//                         o_width: e,
//                         o_height: b
//                     });
//                     var e = e + "x" + b,
//                         b = 1,
//                         c = d[0].naturalWidth || d.width(),
//                         h = d[0].naturalHeight || d.height();
//                     170 < c && (b = 170 / c);
//                     200 < h * b && (b = 200 / h);
//                     d.attr({
//                         width: c * b,
//                         height: h * b
//                     });
//                     var b = a('<span class="timg_container"></span>'),
//                         f = a('<div class="note"></div>');
//                     f.text(e);
//                     f.attr("title", "Click to toggle");
//                     b.append(f);
//                     d.before(b);
//                     b.prepend(d);
//                     f.click(i);
//                     b.click(function (b) {
//                         if (1 ===
//                             b.which || a.browser.msie && 9 > parseInt(a.browser.version, 10) && 0 === b.which) return i.call(f, b, !0), !1
//                     })
//                 }
//                 d.trigger("timg.loaded")
//             }
//         };
//     g.scan = function (d) {
//         a(d).find("img.timg").each(function (d, b) {
//             b = a(b);
//             b.hasClass("complete") || (b.addClass("loading"), b[0].complete || null !== b[0].naturalWidth && 0 < b[0].naturalWidth ? k.call(b) : b.load(k))
//         })
//     };
//     // a(f).ready(function () {
//     //     g.scan("body")
//     // });
//     // a(e).load(function () {
//     //     var d = a("img.timg.loading");
//     //     d.length && d.each(function (a, b) {
//     //         k.call(b)
//     //     })
//     // })
// }

  function buttonClass(thisForum, amberPos){
    if (thisForum == 219){
      console.log("FUNCTION WORK")
      if (amberPos) return "meAmber"
      else return "meGreen"
    }
    else return "meMain"
  }

    var pp = '<td class="postbody"><div class="bbc-block"><h4><a class="quote_link" href="/showthread.php?goto=post&postid=431010047#post431010047" rel="nofollow">Valeyard posted:</a></h4><blockquote><img src="http://i.imgur.com/hlx0isT.jpg" alt="" class="timg" border="0"><br /></blockquote></div><p class="editedby"></td>'
    
    $pp1 = $(pp)
    console.log($pp1[0])

$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;
  var next;
  var settings = ["iglist", "oldbread", "lazyload", "avatarHideOption", "snypeAudio", "snype", "fflist", "signature", "quote", "avatarHide", "ads", "tweet", "filter", "vine", "webm", "cats", "main", "tree", "embedTweet"];
  
  chrome.storage.sync.get(settings,function (obj){


    //console.log(timg.scan)

    g = obj;
    if (g.lazyload == undefined) g.lazyload = false;
    if (g.lazyload){
      $("td.postbody").find("img").each(function(index, image){
        $this = $(image)
        var src = this.getAttribute("src")
        this.setAttribute("class", this.getAttribute("class") + " lazy")
        var class1 = this.getAttribute("class")
        this.removeAttribute("src")
        this.setAttribute("data-original", src)
      });

      $(function() {
        $("img.lazy").lazyload();
      });
    }



    //timg.scan($pp1[0])


    //console.log(hg)
    var s = chrome.extension.getURL("css/yosplus.css")
    console.log(s)
    $('head').append('<link rel="stylesheet" href="'+s+'" type="text/css" />');

    var forum_177 = {"\\b(daniel bryan|bryan|dbd|db)\\b":"vanilla midget", "\\bover/under\\b":"odds"};
    var forum_219 = {"\\bspongeh\\b":"bread stymie", "\\bsteve jobs\\b":"stebe jobs", "\\bandroid\\b":"anroid", "\\bgodaddy\\b":"nodaddy", "\\bValeyard\\b":"asshole", "\\apt gangbang\\b":"<marquee>apt gangbang</marquee>"};
    var forum_26 = {"\\b ralp \\b":"the talking toilet", "\\bgirls\\b":"bleeders", "\\bgbs\\b":"the moon", "\\bguys\\b":"bleeders"};
    var filters = {177: forum_177, 219: forum_219 ,26: forum_26}

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    
    var c = 0;
    var thisForum;
    // var fh = document.getElementsByTagName("body")[0].getAttribute("class");
    // var ge = new RegExp("(showthread|forumdisplay|newreply|forumhome)[ ]*([A-Za-z0-9_]*)")
    // var te = ge.exec(fh);

    // if (te ==null) thisForum = "smilie";
    // else{
    //   var pageType = te[1];
    //   thisForum = te[2];
    // }
    thisForum = $("body").attr("data-forum")

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
      $(".title").toggle(g.avatarHide)
    });

    var igName = g.iglist
    $( "input.bginput" ).each(function(index, image) {
      $this = $(image)
      if ($this.attr("type") == "text") var name = $this.attr("value")
      if (name != undefined) igName.push(name)
    });

    chrome.storage.sync.set({"iglist": igName})
    if (g.snypeAudio){
      var audioPath = chrome.extension.getURL("audio/Headshot.wav");
      $("body").prepend('<audio id="audio" src=' + audioPath + ' ></audio>')
    }

    

    var amberPos;
    if ($("#blarf219").attr("href") == "/css/219a.css"){
      amberPos = true;
    }
    else{
      amberPos = false;
    }
    if (g.signature == undefined) g.siganture = false;
    $(':checkbox').each(function(index, element) {
        var name = this.name;
        console.log(name)
        console.log(g.signature)
        if (name == "signature") element.checked = g.signature;
    });

    if (g.quote == undefined) g.quote = true;
    $("#switchpos").click(function(event) {
      console.log($("#blarf219").attr("href"))
      if ($("#blarf219").attr("href") == "/css/219a.css"){
        amberPos = true;
      }
      else{
        amberPos = false;
      }
           
      $(".post").each(function(index, image) {
        $this = $(image);
        if (g.quote) $this.myfunction();
      })
    })
    
  
    var ff = '<tr class="forum forum_268"><td class="icon"><a href="forumdisplay.php?forumid=268"><img src="http://fi.somethingawful.com/forumicons/byob.gif" title="118527 replies in 4674 threads" alt=""></a></td><td class="title"><a class="forum" href="forumdisplay.php?forumid=268" title="Want to have a good time with friends online? Step in and have a chat. Chill out and enjoy yourselves online.">BYOB 8.2</a><div class="subforums"><b>SUBFORUMS:</b> (None)<input style="float:right;" type="button" class="sb" value="Add"></div></td><td class="moderators"><a href="member.php?action=getinfo&amp;userid=85738">Jett</a>, <a href="member.php?action=getinfo&amp;userid=173896">Arnold of Soissons</a></td></tr>'
   
    console.log($("tr.section:first-of-type").before('<tr class="section" id="favouriteForums"><th class="category" colspan="2">Favourites - Click here to collapse category</th><th class="moderators">Moderators</th></tr>'))
    $(".category").each(function(index, image){
      console.log(image)
      $this = $(image)
    })
    var postCounter = 0
    $(".post").each(function(index, image){
      postCounter++;
      $this = $(image)
    })

    var qs = $.param.querystring();
    var myObj = $.deparam( qs )
    console.log(myObj)

    var inc = false;
   
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

    var c = buttonClass(thisForum, amberPos)
    $(".threadbar").find("ul.postbuttons").prepend('<li><input type="button" class="turbo '+c+'" value="TURBO!"/></li>')

    var turbo = false;
    $('.turbo').click(function(event) {
      turbo = !turbo
      if (turbo){
        $(".turbo").attr("style", "color:#EACF4C!important;border: 1px solid #EACF4C!important;" )
        setInterval(function() {
          countPost();
         if ((postCounter%40)==0 && inc==false){
           inc = true;
           myObj.pagenumber = parseInt(myObj.pagenumber)+1
         }
          newUrl = $.param.querystring( window.location.href, { threadid:myObj.threadid, pagenumber:myObj.pagenumber } );
          $.get( newUrl,
                  function(data) {
                    console.log(data)
                    multiply(data)              
                  }
              );
        }, 10000);
      }
      else $(".turbo").attr("style", "color:#57FF57!important;border: 1px solid #57FF57!important;" )
    })
    var newUrl = $.param.querystring( window.location.href, { threadid:myObj.threadid, pagenumber:myObj.pagenumber } );

    function multiply(y) {
      $this = $(y)
      $this.find(".post").each(function(index, image){
        if ($(image).attr("id") > $(".post").last().attr("id") ){
          console.log(image)

          $(".post").last().after(image)
          //$(image).myfunction()
        } 
      })

    }

    $("tr.forum").find("td.title").prepend('<input style="float:right;" type="button" class="sb" value="Add"/>')
    if (window.location == 'http://forums.somethingawful.com/' || window.location == 'http://forums.somethingawful.com/index.php'){

    if (g.fflist == undefined) g.fflist = {};
        $.each(g.fflist, function(index, thing){
          var geg = new RegExp("forum ([a-zA-Z0-9_]+)")
          var g = geg.exec(thing)
          if (g!=null){
            $this = $("."+g[1])
            $this.attr("class", $this.attr("class") + " favourite")
            $("#favouriteForums").after($this)
            $this.find("input").remove()
          }
    })
      }

   $(".favourite").find("td.title").prepend('<input style="float:right;" type="button" class="sb" value="Delete"/>')

    $('.sb').click(function(event) {
      var a = $(this).parents('.forum');

      if ($(a[0]).find(".sb").attr("value")=="Add"){
        var t = g.fflist
        a.attr("class", a.attr("class") + " favourite")
        t[a.attr("class")]=a.attr("class")
        a.find("input").remove()
        $("#favouriteForums").after(a[0])
        chrome.storage.sync.set({"fflist": t},function (){
      });
      }
      else{
        var t = g.fflist;
        delete t[a.attr("class")]
                chrome.storage.sync.set({"fflist": t},function (){
      });
        a.remove()
      }
    });

    if (thisForum == 219){
    if (g.snype == undefined) g.snype = false;
    if (g.snypeAudio == undefined) g.snypeAudio = true;
    if (g.snype){
      $("tr.thread").each(function(index, value){
        $this = $(value)
        var replies = $this.find("td.replies")[0].innerText
        if (replies < 40){
          if (replies%40 == 39) $(value).find(".title_inner").prepend('<input style="float:right;margin-top:7px;margin-right:7px;" type="button" class="snype" value="Snype"/>')
        }
        else if (replies == 0){}
        else{
          if (replies%40 == 39) $(value).find(".title_inner").prepend('<input style="float:right;margin-top:7px;margin-right:7px;" type="button" class="snype" value="Snype"/>')
        }
      })

     $('.snype').click(function(event) {
      var audio = document.getElementById("audio");
      if (g.snypeAudio) audio.play();
      var a = $(this).parents('tr.thread');
      var geg = new RegExp("(threadid=)([0-9]+)")
      a.find(".snype").remove()
      $.each(a.find("a"), function(index, value){
      var g = geg.exec(value.href);
      if (g!=null){
        $.get( "http://forums.somethingawful.com/newreply.php?action=newreply&threadid="+g[2],
                function(data) {
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
                    $.post('newreply.php?', e, 
                        function(returnedData){
                             console.log(returnedData);
                    });
                }
            );
        return false
      }
      })
    });
    }
  }

  $("form.searchquery").submit(function (e) {
      e.preventDefault();
      console.log("HEY")
    })

  // $( ".searchButton" ).click(function(event) {

  //   console.log(event)
  //   console.log($(this).parents("form"))
  //   event.preventDefault()
  // });

  var modnames = {};
  var htr = 'http://forums.somethingawful.com/banlist.php?&sort=&asc=0&adminid=&ban_month=0&ban_year=0&actfilt=-1&pagenumber='
  var i = 1;

  var probReg = new RegExp("(.*)\. \s*User loses posting privileges for ([0-9]+|100,000) (hours|day|days|week|month).")

  //var str = "Low content. User loses posting privileges for 1 day."
  var dateReg = new RegExp("([0-9]+\/[0-9]+\/[0-9]+)");
  var timeReg = new RegExp("(([0-9]+:[0-9]+)(am|pm))");
  //console.log(rg.test(str))
  console.log("ASDS")
 


  if (true){
    $("td.postlinks").each(function(index, value){
      $this = $(value)
      var c = buttonClass(thisForum, amberPos)
      $(value).find("ul.postbuttons").prepend('<input type="button" class="empty '+c+'" value="Emptyquote!"/>')
    })

   $('.empty').click(function(event) {
    var a = $(this).parents('.post');
    var geg = new RegExp("(threadid=)([0-9]+)")
    console.log($(a).find("img[alt='Quote']")[0].parentNode.href)
    var rep = $(a).find("img[alt='Quote']")[0].parentNode.href
    //a.find(".snype").remove()
    // $.each(a.find("a"), function(index, value){
    // var g = geg.exec(value.href);
     // if (g!=null){
      $.get( rep,
              function(data) {
                console.log(data)
                $this = $(data)
                console.log($this.find("input[name='submit']").trigger('click'))
              }
          );
      return false
    // }
    //  })
  });
  }

    var back = "empty"
    var forward = "empty"

    var top = $.find(".top")[0]

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
    if (g.avatarHideOption == false) $(".title").show()
    if (g.avatarHideOption == undefined) g.avatarHideOption = false;
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
        var fname = geg.exec(c)
        var main;
        main = !g.cats[fname[1]]
        g.cats[fname[1]] = main;
        if (!main) event.target.innerText = fname[1] + " - Click here to expand category"
        else event.target.innerText = fname[1] + " - Click here to collapse category"
        $this.parent().nextUntil("tr.section").toggle();
        var h = g.cats;
        chrome.storage.sync.set({"cats": g.cats},function (){
        });
      }

    });

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
                bc[i].appendChild(b);
            }
        }
    }
    $("span.mainbodytextlarge").prepend('<a class="index" href="/" title="Forums index">«</a>');
  }

    $(".mainbodytextsmall").each(function(index, image) {
    	$this = $(image);

     	var y = new RegExp("Hello, ([A-Za-z0-9]+)!")
     	var g = y.exec(this.innerText);
     	
     	user = g[1];
     	localStorage.user = "";
     	localStorage.user=g[1];
    });

    $.fn.myfunction = function () {

      $this.find(".bbc-block").each(function(index, quote){
        $this = $(quote);

        var posted = new RegExp("([A-Za-z0-9 -_]+) posted:")

        if ($this.find("h4")[0] != null){
          var k = posted.exec($this.find("h4")[0].innerText)

          if (posted.test($this.find("h4")[0].innerText)){
  
            if (k[1] == localStorage.user){

               // $(quote).css( "background", "rgb(204, 139, 199)" );
               // $(quote).css( "background-color", "rgb(204, 139, 199)" );

               // $this.find("blockquote").css( "color", "#000000" );
                console.log(thisForum)
              if (thisForum != 219) $(quote).attr("class", $(quote).attr("class") + " meMain")
              else if (thisForum==219){
                console.log("MADE IT")
                if (!amberPos){
                  $(quote).attr("class", $(quote).attr("class") + " meAmber")
                }
                else{
                  $(quote).attr("class", $(quote).attr("class") + " meGreen")
                }
              } 

            }
          }
        } 

      });
    };

    $(".post").each(function(index, image) {
      $this = $(image);

      if (g.quote) $this.myfunction();
      });
    if (g.embedTweet == undefined) g.embedTweet = true;
    $(".post").each(function(index, image) {
    	$this = $(image);

      $this.find("iframe").attr("allowFullscreen", "true")
      if (g.embedTweet){
        $this.find("a").each(function(index, text){
          $this = $(text)

          var twit = new RegExp("https://twitter.com/[:A-Za-z0-9\.\/]+/(status|statuses)/([0-9]+)");
          var twitUrl = twit.exec(text.href);

          if(twit.test(text.href)){
            console.log("made it to cached")
            console.log($this[0].outerHTML)
            $this.wrap('<div class="tweet' + twitUrl[2] + '">')
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
                  $('.tweet' + twitUrl[2]).html(data.html);
                  counter++;
                }
              });
            //}
          }
        });
      }
      var yostop = "obstipator";
    	var text = $(this).find(" td.postbody")[0].innerHTML;
      var tweetText = $(this).find(" td.postbody")[0].innerText;
    	var author = $(this).find(" dt.author")[0].innerText;
      var author1 = $(this).find(" dt.author")[0].innerHTML;
      var gah = new RegExp("\\b"+yostop+"\\b", 'gi');
      var tee = gah.exec(author1);

      if (tee != null){
        console.log(tee);
        console.log("HEYYYYYY")
        console.log($(this).find("dd.title").append("<hy><img src='http://fi.somethingawful.com/images/smilies/emot-siren.gif'>YOSTOP<img src='http://fi.somethingawful.com/images/smilies/emot-siren.gif'></hy>"))
        }

      //if (author == yostop) $(this).find(".bbc-center")[0].innerText = $(this).find(".bbc-center")[0].innerText + "LOOOOOOOL"
      var x = new RegExp("(http|https)://vine\.co/v/[A-Za-z0-9]+");
      var pomf = new RegExp("[:A-Za-z0-9\.\/]+\\.webm");
      var gif = new RegExp("(http|https)://[A-Za-z0-9]+\.gfycat\.com/[A-Za-z0-9]+[\.]*[A-Za-z0-9]+\.webm");

      if (g.filter == undefined) g.filter = false;
      if (g.filter){
        //console.log(text)
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
        console.log(text)
        var postBody = $(this).find(" td.postbody")[0];
        var ur85 = pomf.exec(text);
        var sth = '<video autoplay loop width="450" muted="true" controls> <source src="'+ur85[0]+'" type="video/webm"> </video>'

        $this.find("a").each(function( index, value ) {
          console.log("finding as here")
          var jelm = $(value);
           if(value.href == ur85[0]){
           jelm.replaceWith(sth);
          }
        });

        $this.find(".bbc-spoiler").each(function( index, value ) {
          console.log("finding as here")
          var jelm = $(value);
          console.log(value.innerText)
           if(value.innerText == ur85[0]){
           value.innerHTML = sth;
          }
        });

        $this.find("span.bbc-spoiler").each(function( index, value ) {
          // $(value).find(".reveal").show(false)
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
    });
  });
});
