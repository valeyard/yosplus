$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;
  var next;
  var settings = ["iglist", "oldbread", "lazyload", "avatarHideOption", "snypeAudio", "snype", "fflist", "signature", "quote", "avatarHide", "ads", "tweet", "filter", "vine", "webm", "cats", "main", "tree", "embedTweet"];
  
  chrome.storage.sync.get(settings,function (obj){
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

    var forum_177 = {"\\b(daniel bryan|bryan|dbd|db)\\b":"vanilla midget", "\\bover/under\\b":"odds"};
    var forum_219 = {"\\bspongeh\\b":"bread stymie", "\\bsteve jobs\\b":"stebe jobs", "\\bandroid\\b":"anroid", "\\bgodaddy\\b":"nodaddy", "\\bValeyard\\b":"asshole", "\\apt gangbang\\b":"<marquee>apt gangbang</marquee>"};
    var forum_26 = {"\\b ralp \\b":"the talking toilet", "\\bgirls\\b":"bleeders", "\\bgbs\\b":"the moon", "\\bguys\\b":"bleeders"};
    var filters = {"forum_177": forum_177, "forum_219": forum_219 ,"forum_26": forum_26}

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    
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

    var turbo = false;
    $(".threadbar").find("ul.postbuttons").prepend('<div style="padding-top:5px; padding-right:5px;"> <input style="float:right;" type="button" class="turbo" value="TURBO!"/></div>')
    $('.turbo').click(function(event) {
      turbo = !turbo
      if (turbo){
        $(".turbo").attr("style", $(".turbo").attr("style") + "color:#EACF4C!important;border: 1px solid #EACF4C!important;" )
        setInterval(function() {
          countPost();
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

    function multiply(y) {
      $this = $(y)
      $this.find(".post").each(function(index, image){
        if ($(image).attr("id") > $(".post").last().attr("id") ) $(".post").last().after(image)
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

    if (thisForum == "forum_219"){
    if (g.snype == undefined) g.snype = false;
    if (g.snypeAudio == undefined) g.snypeAudio = true;
    if (g.snype){
      $("tr.thread").each(function(index, value){
        $this = $(value)
        var replies = $this.find("td.replies")[0].innerText
        if (replies < 40){
          if (replies%40 == 39) $(value).find(".title_inner").prepend('<div style="padding-top:5px; padding-right:5px;"> <input style="float:right;" type="button" class="snype" value="Snype"/></div>')
        }
        else if (replies == 0){}
        else{
          if (replies%40 == 39) $(value).find(".title_inner").prepend('<div style="padding-top:5px; padding-right:5px;"> <input style="float:right;" type="button" class="snype" value="Snype"/></div>')
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
                }
            );
        return false
      }
      })
    });
    }
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

    if (g.avatarHideOption == undefined) g.avatarHideOption = true;
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

               $(quote).css( "background", "rgb(204, 139, 199)" );
               $(quote).css( "background-color", "rgb(204, 139, 199)" );

               $this.find("blockquote").css( "color", "#000000" );

              if (thisForum != "forum_219") $(quote).find(".quote_link").css("color", "rgb(0, 20, 255)")
              else{
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
    });
  });
});
