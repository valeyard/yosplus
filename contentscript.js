
// $.extend({
//     getManyCss: function(urls, callback, nocache){
//         if (typeof nocache=='undefined') nocache=false; // default don't refresh
//         $.when(
//             $.each(urls, function(i, url){
//                 if (nocache) url += '?_ts=' + new Date().getTime(); // refresh? 
//                 $.get(url, function(){
//                   console.log(url + " LOL WTF URL")
//                     $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
//                 });
//             })
//         ).then(function(){
//             if (typeof callback=='function') callback();
//         });
//     },
// });



$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;




//   $.getScript("https://dl.dropboxusercontent.com/u/17019326/salib.js", function(){
//     alert("Running salib.js");
// });
  chrome.storage.sync.get(["signature", "quote", "avatarHide", "ads", "tweet", "filters", "vine", "webm", "cats", "main", "tree", "embedTweet"],function (obj){
    console.log(JSON.stringify(obj));
    console.log(obj);
    g = obj;
    console.log(g.cats);



    var forum_177 = {"\\b(daniel bryan|bryan|dbd|db)\\b":"vanilla midget", "\\bover/under\\b":"odds"};
    var forum_219 = {"\\bspongeh\\b":"bread stymie", "\\bsteve jobs\\b":"stebe jobs", "\\bandroid\\b":"apple", "\\bprovide\\b":"bleeders", "\\bgodaddy\\b":"nodaddy", "\\bValeyard\\b":"asshole"};
    var forum_26 = {"\\b ralp \\b":"the talking toilet", "\\bgirls\\b":"bleeders", "\\bgbs\\b":"the moon", "\\bguys\\b":"bleeders"};
    var filters = {"forum_177": forum_177, "forum_219": forum_219 ,"forum_26": forum_26}

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    
    var c = 0;
    

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

    $( ".userinfo" ).each(function(index, image) {
      $this = $(image)
      console.log(g.avatarHide + "GOOD BOY")

      $(".title").toggle(g.avatarHide)
      //g.avatarHide = !g.avatarHide;

    });

    var amberPos;
    if ($("#blarf219").attr("href") == "/css/219a.css"){
      amberPos = true;
    }
    else{
      amberPos = false;
    }
    window.addEventListener("keyup", function(e){ if(e.keyCode == 27) history.back(); })
    $(':checkbox').each(function(index, element) {
        var name = this.name;
        console.log(name)
        console.log(g.signature)
        if (name == "signature") element.checked = g.signature;
    });

    //if (amberPos == null) amberPos = false;
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
        if (g.quote) $this.myfunction();
      })
    })
var back = "empty"
var forward = "empty"
var hgh = 50000

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


    // $(".top").each(function(index, image) {
    //   $this = $(image)
    //   var geg = new RegExp("(pagenumber=)([0-9]+)")

    //   // console.log($(image).attr("a"))
    //   console.log("s")
    //   $this.find("a").each(function(index, deg) {
    //     $this = $(deg)
    //     console.log("s")
    //     console.log($this.attr("href"))
    //     var g = geg.exec($this.attr("href"))
    //     if (geg.test($this.attr("href"))){
    //       var pageNum = g[2];
    //       var page = $this[0].innerText
    //       console.log(page)
    //       if (page =="‹"){
    //         console.log("should be jere")
    //         back = $this.attr("href")
    //       } 
    //       else back = null
    //       if (page =="›"){
    //         forward = $this.attr("href")
    //       } 
    //       else forward = null
    //       // page.replace(geg, pageNum+1)
    //        console.log(back)
    //       window.addEventListener("keyup", function(e){ if(e.keyCode == 65){
            
    //         console.log(back + " BACK HERE");
    //         console.log(hgh)
    //         if (back != null) window.location = back;}  
    //       })
    //       window.addEventListener("keyup", function(e){ if(e.keyCode == 68){
    //         console.log(back);
    //         if (forward != null) window.location = forward;}  
    //       })
    //       // console.log(g[0])
    //     } 
    //   })

    // })

    $( ".userinfo" ).click(function(event) {
      $this = $(event.target)

      event.stopPropagation();  
      $(".title").toggle()
      var jet = !g.avatarHide;
      chrome.storage.sync.set({"avatarHide": jet},function (){
      });
    });


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

var thisForum;
    $("tr.forum_26").each(function(index, image){
      $this = $(image);

      var tweetText = $(this).find(" a.forum")[0].setAttribute("title", "LMAO");
      $(this).find(" a.forum")[0].innerText = "FYAD: cherry blossom petal landed in the lunch"
      $(this).find(" a.forum_154")[0].setAttribute("title", "LMAO");
      $(this).find(" a.forum_154")[0].innerText = "Synthy's overflowing stomach"
    });

    var fh = document.getElementsByTagName("body")[0].getAttribute("class");
    var ge = new RegExp("(showthread|forumdisplay|newreply|forumhome)[ ]*([A-Za-z0-9_]*)")
    var te = ge.exec(fh);

    if (te ==null) thisForum = "smilie";
    else{
      var pageType = te[1];
      thisForum = te[2];
    }

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

    $(".post").each(function(index, image) {
    	$this = $(image);
      //console.log($this)
     // console.log(g.quote)
      if (g.quote) $this.myfunction();


      if (g.embedTweet){
        $this.find("a").each(function(index, text){
          $this = $(text)
          var twit = new RegExp("https://twitter.com/[:A-Za-z0-9\.\/]+/(status|statuses)/([0-9]+)");
          //console.log(text)
          var twitUrl = twit.exec(text);
         // console.log(twitUrl)
          if(twit.test(text)){
            console.log("made it to cached")
            $this.wrap('<div class="tweet' + twitUrl[1] + '">')
            if (localStorage.getItem(twitUrl[0]) !== null){
              $('.tweet' + twitUrl[1]).html(localStorage.getItem(twitUrl[0]));
              counter++;
            }
            else{
              $.ajax({
                
                url: "https://api.twitter.com/1/statuses/oembed.json?url="+twitUrl[0]+"&omit_script=true",
                async:false,
                success: function(data){
                  console.log("made it to ajaz")
                  console.log(data.html) 
                  $this.empty()
                  localStorage.setItem(twitUrl[0], data.html)
                  $('.tweet' + twitUrl[1]).html(data.html);
                  counter++;
                }
              });
            }
          }
        });
      }

    	var text = $(this).find(" td.postbody")[0].innerHTML;
      var tweetText = $(this).find(" td.postbody")[0].innerText;
    	var author = $(this).find(" dt.author")[0].innerText;

      var x = new RegExp("(http|https)://vine\.co/v/[A-Za-z0-9]+");
      var pomf = new RegExp("[:A-Za-z0-9\.\/]+\\.webm");
      var gif = new RegExp("(http|https)://[A-Za-z0-9]+\.gfycat\.com/[A-Za-z0-9]+[\.]*[A-Za-z0-9]+\.webm");

      if (g.filters){
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
            $(this).find(" dt.author")[0].innerText=$(this).find(" dt.author")[0].innerText.replace(tee[0], filters[thisForum][j])
          }
        }
      }

      tweetText = tweetText.replace(/\"/g,"&quot;");

      if (author == localStorage.user){
        //console.log(localStorage.user)
        if (g.tweet){
          $(this).find(" ul.postbuttons").append('<li><a href="https://twitter.com/share" class="twitter-share-button" data-url="manas" data-text="'+tweetText+'" data-count="none" data-dnt="true">Tweet</a></li>');
        } 
     	}
      var twit = new RegExp("https://twitter.com/[:A-Za-z0-9\.\/]+/status/[0-9]+");
      var twitUrl = twit.exec(text);
      var counter = 0;
      var otherCounter =0;

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
