
$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;
  chrome.storage.sync.get(["tweet", "filters", "vine"],function (obj){
    console.log(JSON.stringify(obj));
    console.log(obj);
    g = obj;


var forum_177 = {"\\b(daniel bryan|bryan|dbd|db)\\b":"vanilla midget", "\\bover/under\\b":"odds"};
var forum_219 = {"\\bsteve jobs\\b":"stebe jobs", "\\bandroid\\b":"apple", "\\bprovide\\b":"bleeders"};
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

var fh = document.getElementsByTagName("body")[0].getAttribute("class");

var ge = new RegExp("(showthread|forumdisplay|newreply) ([A-Za-z0-9_]+)")

var te = ge.exec(fh);

if (te ==null) var thisForum = "smilie";
else var thisForum = te[2];

console.log(thisForum)

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

$(".post").each(function(index, image) {
	$this = $(image);

	var text = $(this).find(" td.postbody")[0].innerHTML;
  var tweetText = $(this).find(" td.postbody")[0].innerText;
	var author = $(this).find(" dt.author")[0].innerText;
var x = new RegExp("(http|https)://(vine)\.(co)/v/[A-Za-z0-9]+");
if (g.filters){
for(var j in filters[thisForum]){
  var h = new RegExp(j, 'i');
  var t = h.exec(text);

  if (t != null){
    $(this).find(" td.postbody")[0].innerHTML=text.replace(t[1], filters[thisForum][j])
}

var gah = new RegExp("\\b"+j+"\\b", 'gi')
var tee = gah.exec(author)
console.log(tee);
  if (tee != null){
    console.log(tee)
    console.log($(this).find(" dt.author")[0].innerText)
    $(this).find(" dt.author")[0].innerText=$(this).find(" dt.author")[0].innerText.replace(tee[1], filters[thisForum][j])
}
}
}
    //var spac = new RegExp('\"', 'g');
      //$(this).find(" td.postbody")[0].innerText.replace(/\"/g,"&quot;");
      text = text.replace(/\"/g,"&quot;");

    if (author == localStorage.user){
      console.log(localStorage.user)

     if (g.tweet) $(this).find(" ul.postbuttons").append('<li><a href="https://twitter.com/share" class="twitter-share-button" data-url="manas" data-text="'+tweetText+'" data-count="none" data-dnt="true">Tweet</a></li>');

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
