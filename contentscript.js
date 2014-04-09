
$(document).ready(function() {
  // Trollface image must be at 'my_extension/images/trollface.jpg'.
  // Content script: contentscript.js
var storage = chrome.storage.sync;
 var g;
 chrome.storage.sync.get(["tweet", "filters", "vine"],function (obj){
    console.log(JSON.stringify(obj));
    console.log(obj);
    g = obj;

console.log(g);

if (localStorage.is_already_a_buzzkill == null) is_already_a_buzzkill = true;

chrome.extension.sendMessage({type:'showPageAction'});
  console.log("ERASSEDASE")
  var forum_177 = {"\\bdaniel bryan\\b":"vanilla midget", "\\bover/under\\b":"odds", "\\b:money:\\b":"vanilla midget", "\\bsee\\b":"vanilla midget", "\\bsurge\\b":"vanilla midget",
"\\bmissed\\b":"ROFLCOPTER", "\\btrying\\b":"ROFLCOPTER2"};
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
var c = 0;
var filters = {"forum_177": forum_177}

!function localsto(){
	if(typeof(Storage)!=="undefined")
  {
  if (localStorage.clickcount)
    {
    	var y = new RegExp("Hello, ([A-Za-z0-9]+)!")
	 	//console.log(y.test("Hello, Valeyard! Make all your dreams come true"));
	 	var g = y.exec("Hello, Valeyard! Make all your dreams come true");
	 	
    localStorage.user=g[1];
    localStorage.tweet=false;
    }
  else
    {
    }
  }
else
  {

  }
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
});

  console.log("starting to drog");
  dragSrcEl = this;
  source = this.getAttribute("id");
  console.log(source);
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
  this.classList.add('over');
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

    console.log($('.standard').find('.smilie_group')[0].innerHTML);
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
    //find(".smilie_group").
    //this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.

  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}

var cols = document.querySelectorAll('.smilie');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false)
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

var forum = document.body.data-forum;
console.log(forum);

var fh = document.getElementsByTagName("body")[0].getAttribute("class");
console.log(fh);

var ge = new RegExp("(showthread|forumdisplay|newreply) ([A-Za-z0-9_]+)")
var te = ge.exec(fh)
var thisForum = te[2];
console.log(thisForum);
console.log("ASDASDASDWAWWWWW")

$(".smilie_list").each(function(index, image) {
	$this = $(image);
	//console.log(this);

	var group = '<br><br><h3>Favourite Smilies</h3> <ul class="smilie_group">';
	
	var groupEnd = '</ul><br><br><br><br><br><br>'
  var ht = '<h3>Basic Smilies</h3> <ul class="smilie_group"> <li class="smilie"> <div class="text">:(</div> <img alt="" src="http://fi.somethingawful.com/images/smilies/frown.gif" title="frown"> <li class="smilie"> <div class="text">:)</div> <img alt="" src="http://fi.somethingawful.com/images/smilies/smile.gif" title="smile"> </ul>';
	$(this).find(".inner").prepend(group + localStorage.favourite + groupEnd)
		});

$(".smilie").each(function(index, image) {
	$this = $(image);
	//console.log(this);
	var att=document.createAttribute("draggable");
	att.value="true";
	this.setAttributeNode(att);;

  var att1=document.createAttribute("id");
  //console.log(this.getAttribute("id"));
  if (this.getAttribute("id") != "favourite"){
    att1.value="basic";
    this.setAttributeNode(att1);;
  }
	});

$(".mainbodytextsmall").each(function(index, image) {
	$this = $(image);
	//console.log(this.innerText);
	 	var y = new RegExp("Hello, ([A-Za-z0-9]+)!")
	 	//console.log(y.test("Hello, Valeyard! Make all your dreams come true"));
	 	var g = y.exec(this.innerText);
	 	
	 	user = g[1];
	 	localStorage.user = "";
	 	localStorage.user=g[1];
	 	//console.log(localStorage.user);
	});

$(".post").each(function(index, image) {
	$this = $(image);

	var text = $(this).find(" td.postbody")[0].innerHTML;

	var author = $(this).find(" dt.author")[0].innerText;
var x = new RegExp("(http|https)://(vine)\.(co)/v/[A-Za-z0-9]+");
console.log(filters[thisForum]);
console.log("THISFORUM")
for(var j in filters[thisForum]){
  var h = new RegExp(j, 'gi');
  var t = h.exec(text);
console.log(g);
console.log("HEY HEY HEY LISTEN")
  if (t != null){
    $(this).find(" td.postbody")[0].innerHTML=text.replace(t, filters[thisForum][j])
}
}
      text = text.replace(/\"/g,"&quot;");
      text = text.replace(/d/g,"LOL");

    if (author == localStorage.user){
      console.log(localStorage.user)

     if (g.tweet) $(this).find(" ul.postbuttons").append('<li><a href="https://twitter.com/share" class="twitter-share-button" data-url="manas" data-text="'+text+'" data-count="none" data-dnt="true">Tweet</a></li>');

          if (g.vine && x.test(text)){
        var url2 = x.exec(text);
       $(this).find(" td.postbody")[0].innerHTML.replace('/\b('+url2[0]+')\b/g', "dsdfsdfsdfsdfs");

              //console.log($(this).find(" td.postbody")[0].innerText);
       $(this).find(" td.postbody").append('<iframe class="vine-embed" src="'+url2[0]+'/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>');

   }
 	}
  

 });

 });

});
