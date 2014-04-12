
$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;

  chrome.storage.sync.get(["tweet", "filters", "vine", "webm", "cats", "main"],function (obj){
    console.log(JSON.stringify(obj));
    console.log(obj);
    g = obj;
    console.log(g.cats);

$.extend({
    getManyCss: function(urls, callback, nocache){
        if (typeof nocache=='undefined') nocache=false; // default don't refresh
        $.when(
            $.each(urls, function(i, url){
                if (nocache) url += '?_ts=' + new Date().getTime(); // refresh? 
                $.get(url, function(){
                    $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
                });
            })
        ).then(function(){
            if (typeof callback=='function') callback();
        });
    },
});

var forum_177 = {"\\b(daniel bryan|bryan|dbd|db)\\b":"vanilla midget", "\\bover/under\\b":"odds"};
var forum_219 = {"\\bsteve jobs\\b":"stebe jobs", "\\bandroid\\b":"apple", "\\bprovide\\b":"bleeders", "\\bgodaddy\\b":"nodaddy", "\\bValeyard\\b":"asshole"};
var forum_26 = {"\\b ralp \\b":"the talking toilet", "\\bgirls\\b":"bleeders", "\\bgbs\\b":"the moon", "\\bguys\\b":"bleeders"};
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
var c = 0;
var filters = {"forum_177": forum_177, "forum_219": forum_219 ,"forum_26": forum_26}

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
  // this / e.target is the current hover target.
  //this.classList.add('over');
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


var fyad = '<tr class="forum forum_26">  <td class="icon"><a href="forumdisplay.php?forumid=26"><img src="http://fi.somethingawful.com/forumicons/fyad.gif" title="323066 replies in 667 threads" alt=""></a></td><td class="title"><a class="forum" href="forumdisplay.php?forumid=26" title="">FYAD: No more</a><div class="subforums"><b>SUBFORUMS:</b> <a class="forum_154" href="forumdisplay.php?forumid=154">Templo Del Perro</a></div></td><td class="moderators"><a href="member.php?action=getinfo&amp;userid=16901">corsair</a>, <a href="member.php?action=getinfo&amp;userid=34787">paraone</a>, <a href="member.php?action=getinfo&amp;userid=54248">Sweet Blameless Child</a>, <a href="member.php?action=getinfo&amp;userid=133705">WEREWAIF</a></td></tr>'

//console.log($.find("tr.forum.forum_26"));

$(".category").each(function(index, image){
  $this = $(image);
  console.log(image.innerText)
  //console.log($this[0].parent().nextUntil("tr.section"));
  //image.show(main);
  console.log(g.cats[image.innerText])
  $this.parent().nextUntil("tr.section").toggle(g.cats[image.innerText]);

});


var fya = $.find("tr.forum.forum_26")[0];
var $terry = $(fya);
//var fyadd = $(fya);
//console.log(fyadd[0].attr("title"));

  $( "#forums" ).click(function(event) {
    $this = $(event.target)
    console.log($this)
    if ($this.attr("class") == "category"){
    //console.log($(event.target).attr("class"))
  //alert( "Handler for .click() called." );
  
console.log(event)

console.log($this.attr("class"))
//$this = $(this).next();

console.log(event.target.innerText)
//var cat = {"Main": true, "Discussion": true, "The Finer Arts": true, "The Community": true, "Archives": true}
var c = event.target.innerText;
$this.parent().nextUntil("tr.section").toggle();
var main;
main = !g.cats[c]
g.cats[c] = main;
var h = g.cats;
chrome.storage.sync.set({"cats": g.cats},function (){
});
console.log(main)
}



// while ($this.attr("class") != "section"){
//   console.log("SEEE")
//   this = $this.next();

// } 

  //console.log(event.target.parentNode.getAttribute("class") + this.nodeType + this.tagName + "INNER TE")
 // event.target.parentNode.style.visibility="hidden";
  // if (stuff.innerText == "Main") alert( "Handler for .click() called." );

});

console.log("ASDASDASD");
$("tr.forum_26").each(function(index, image){
  $this = $(image);
  console.log(this)
  var tweetText = $(this).find(" a.forum")[0].setAttribute("title", "LMAO");
  $(this).find(" a.forum")[0].innerText = "FYAD: cherry blossom petal landed in the lunch"

  $(this).find(" a.forum_154")[0].setAttribute("title", "LMAO");
  $(this).find(" a.forum_154")[0].innerText = "Synthy's overflowing stomach"
  //$(this).find(" a.forum")[0].attr("title", "FUCK YOU")
  console.log(tweetText)
  console.log("ASDSD")
});
console.log("out of there?")
//console.log($.find("tr.forum.forum_26")[0].attr("title"));//.attr("title", "fuck off");
//$.find("tr.forum.forum_26")[0].innerText = "FYAD: No More"

var fh = document.getElementsByTagName("body")[0].getAttribute("class");
console.log(fh);
var ge = new RegExp("(showthread|forumdisplay|newreply|forumhome)[ ]*([A-Za-z0-9_]*)")
console.log("leave")
var te = ge.exec(fh);
//console.log(te[1] + "TESET") //DONT PUT THIS IN DANGER WARNING
if (te ==null) var thisForum = "smilie";
else{
    var pageType = te[1];
   var thisForum = te[2];
}

console.log(pageType)
console.log("here")
$(".smilie_list").each(function(index, image) {
	$this = $(image);
  console.log("THIS FAR?")
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

console.log("before smilie")

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

$(".post").each(function(index, image) {
	$this = $(image);
  console.log("THERE")
	var text = $(this).find(" td.postbody")[0].innerHTML;
  var tweetText = $(this).find(" td.postbody")[0].innerText;
	var author = $(this).find(" dt.author")[0].innerText;
var x = new RegExp("(http|https)://vine\.co/v/[A-Za-z0-9]+");
var pomf = new RegExp("[:A-Za-z0-9\.\/]+\.webm");
var gif = new RegExp("(http|https)://[A-Za-z0-9]+\.gfycat\.com/[A-Za-z0-9]+[\.]*[A-Za-z0-9]+\.webm");
console.log("FILTERS LOL")
if (g.filters){
for(var j in filters[thisForum]){
  console.log(filters[thisForum] + "THIS FORUM FILTER")
  var h = new RegExp(j, 'gi');
  console.log(j)
  var t = h.exec(text);
  console.log(h)
  console.log(text)

  if (t != null){
    console.log("Foundd") //had to change t[0] to t[1] to make it work, it worked previously the other way, watch out
    $(this).find(" td.postbody")[0].innerHTML=$(this).find(" td.postbody")[0].innerHTML.replace(h, filters[thisForum][j])
}

var gah = new RegExp("\\b"+j+"\\b", 'gi')
var tee = gah.exec(author)
//console.log(tee);
  if (tee != null){
    console.log(tee)
    console.log($(this).find(" dt.author")[0].innerText) //had to change tee[0] to tee[1] to make it work, it worked previously the other way, watch out
    $(this).find(" dt.author")[0].innerText=$(this).find(" dt.author")[0].innerText.replace(tee[0], filters[thisForum][j])
}
}

}
    //var spac = new RegExp('\"', 'g');
      //$(this).find(" td.postbody")[0].innerText.replace(/\"/g,"&quot;");
      tweetText = tweetText.replace(/\"/g,"&quot;");

    if (author == localStorage.user){
      console.log(localStorage.user)
      var posStyle = "background-image: -webkit-linear-gradient(#000,#000000) !important; background-image: linear-gradient(#000,#000000) !important; border: #57FF57 solid 1px !important; border-radius: 3px !important; color: #57FF57 !important; text-shadow: 0 0px 0 rgba(255,255,255,.5) !important;"
     if (g.tweet){
        $(this).find(" ul.postbuttons").append('<li><a href="https://twitter.com/share" class="twitter-share-button" style="background-image: -webkit-linear-gradient(#000,#000000) !important; background-image: linear-gradient(#000,#000000) !important; border: #57FF57 solid 1px !important; border-radius: 3px !important; color: #57FF57 !important; text-shadow: 0 0px 0 rgba(255,255,255,.5) !important;" data-url="manas" data-text="'+tweetText+'" data-count="none" data-dnt="true">Tweet</a></li>');
        var frm = frames['iframeId'].document;
        var otherhead = frm.getElementsByTagName("head")[0];
        console.log(otherhead)
     } 

     

 	}

  //    if (g.vine && x.test(text)){
  //      var url2 = x.exec(text);
  //      console.log(url2[0] + " THIS IS THE URL2")
  //      //console.log($(this).find('a').attr("href"))

  //     //$(this).find(" td.postbody")[0].innerHTML =  $(this).find(" td.postbody")[0].innerHTML.replace(x, "dsdfsdfsdfsdfs");
  //     //$(this).find(" td.postbody")[0].innerHTML =  $(this).find(" td.postbody")[0].innerHTML.replace(x, '<iframe class="vine-embed" src="'+url2[0]+'/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>');

  //            //console.log($(this).find(" td.postbody")[0].innerText);
  //     //$(this).find(" td.postbody").append('<iframe class="vine-embed" src="'+url2[0]+'/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>');

  // }
//console.log(this)
  if (gif.test(text) && g.webm){
    var postBody = $(this).find(" td.postbody")[0];
    var ur85 = gif.exec(text);
    //console.log(ur85);
    //console.log($(this).find('a'))
    var sth = '<video autoplay loop width="320" height="240" controls> <source src="'+ur85[0]+'" type="video/webm"> </video>'
    // for (var tempC in $(this).find('a').attr('href')){
    //  // console.log(tempC.data);
    // }

    var testQ = ($this).find("a");
    console.log(testQ);
    $.each(testQ, function( index, value ) {
      var jelm = $(value);
      console.log(value.innerText);
      console.log(value.href);
      console.log(jelm)
       if(value.href == ur85[0]){
        //var htm = value.innerHTML;
        //html.replace()
       // value.innerHTML.replace(value, sth);
       // value.append("hello")
       // value.remove();
       //value.append(sth)
       console.log("GOT HERE YALL")
       //jelm.empty();
       jelm.replaceWith(sth)

      }
      

    });
  }
  else if (pomf.test(text) && g.webm){
    var postBody = $(this).find(" td.postbody")[0];
    var ur85 = pomf.exec(text);
    console.log(ur85[0])
    console.log("MATCHER HERE")
    //console.log(ur85);
    //console.log($(this).find('a'))
    var sth = '<video autoplay loop width="320" muted="true" controls> <source src="'+ur85[0]+'" type="video/webm"> </video>'
    // for (var tempC in $(this).find('a').attr('href')){
    //  // console.log(tempC.data);
    // }

    var testQ = ($this).find("a");
    console.log(testQ);
    $.each(testQ, function( index, value ) {
      var jelm = $(value);
      console.log(value.innerText);
      console.log(value.href);
      console.log(jelm)
       if(value.href == ur85[0]){
        //var htm = value.innerHTML;
        //html.replace()
       // value.innerHTML.replace(value, sth);
       // value.append("hello")
       // value.remove();
       //value.append(sth)
       console.log("GOT HERE YALL")
       //jelm.empty();
       jelm.replaceWith(sth)

      }
      

    });
  }




    if (x.test(text) && g.vine){
    var postBody = $(this).find(" td.postbody")[0];
    var url2 = x.exec(text);
    //console.log(ur85);
    //console.log($(this).find('a'))
    var sth = '<iframe class="vine-embed" src="'+url2[0]+'/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>';
    // for (var tempC in $(this).find('a').attr('href')){
    //  // console.log(tempC.data);
    // }

    var testQ = ($this).find("a");
    console.log(testQ);
    $.each(testQ, function( index, value ) {
      var jelm = $(value);
      console.log(value.innerText);
      console.log(value.href);
      console.log(jelm)
       if(value.href == url2[0]){
        //var htm = value.innerHTML;
        //html.replace()
       // value.innerHTML.replace(value, sth);
       // value.append("hello")
       // value.remove();
       //value.append(sth)
       console.log("GOT HERE YALL")
       jelm.empty();
       jelm.replaceWith(sth)

      }

      //http://forums.somethingawful.com/forumdisplay.php?forumid=26
      

    });
    // $this.find('a').each(function(index, image) {

    //   if ($(image).attr("href") == ur85[0]){ console.log($(this) + "LOL HERE IS THE NEW LOOP")
    //     $(this).find(" td.postbody")[0].innerHTML = $(this).find(" td.postbody")[0].innerHTML.replace(ur85[0], "uhuihuihuih");
    //   $(this).find(" td.postbody")[0].innerHTML = $(this).find(" td.postbody")[0].innerHTML.replace(gif, sth);
    // }
      //console.log($(this).attr("href"));
    // });
//    console.log(ur85[0])
//      $(this).find(" td.postbody")[0].innerHTML = $(this).find(" td.postbody")[0].innerHTML.replace(ur85[0], "uhuihuihuih");
//      $(this).find(" td.postbody")[0].innerHTML = $(this).find(" td.postbody")[0].innerHTML.replace(gif, sth);
//       var testM = "http://zippy.gfycat.com/UnequaledPo...erorshrimp.webm";
//       console.log(" OK HERE IS THE WEBM TEST " + gif.test(testM));

     //console.log(text)
    // $(this).find(" td.postbody")[0].innerHTML=text.replace(ur85[0], "yrdy")
     //console.log(text)
  }
  

 });

 });

});
