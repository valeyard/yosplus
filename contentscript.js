$(document).ready(function() {
  // Trollface image must be at 'my_extension/images/trollface.jpg'.
  console.log("ERASSEDASE")
  var filter177 = {"\\bdaniel bryan\\b":"vanilla midget"};
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
var c = 0;

!function localsto(){
	if(typeof(Storage)!=="undefined")
  {
  if (localStorage.clickcount)
    {
    	var y = new RegExp("Hello, ([A-Za-z0-9]+)!")
	 	console.log(y.test("Hello, Valeyard! Make all your dreams come true"));
	 	var g = y.exec("Hello, Valeyard! Make all your dreams come true");
	 	
    localStorage.user=g[1];
    }
  else
    {
    }
  }
else
  {

  }
}

//<blockquote class="twitter-tweet" lang="en"><p>Haven&#39;t finished Wrestlemania X, only on Bret vs. Yoko, but I can say for a fact that this is the best of the early Wrestlemanias so far.</p>&mdash; KFG (@KungFu_Grip) <a href="https://twitter.com/KungFu_Grip/statuses/452305484339740672">April 5, 2014</a></blockquote>
//<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

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

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    //dragSrcEl.innerHTML.append(this.innerHTML);
    //console.log(this.innerHTML);

  var att1=document.createAttribute("id");
  

  if (dragSrcEl.getAttribute("id") == "basic"){
    att1.value="favourite";
    dragSrcEl.setAttributeNode(att1);;
        $('.standard').find('.smilie_group').append(dragSrcEl);
   // var htmlFav =  $('.standard').find('.smilie_group').innerHTML;
    console.log($('.standard').find('.smilie_group')[0].innerHTML);
    localStorage.favourite = $('.standard').find('.smilie_group')[0].innerHTML;
  }

  else{
    console.log("already a favourite");
    var title = dragSrcEl.innerText;
    console.log(title);
    $('.standard').find('.smilie_group').remove(dragSrcEl);
    $(".smilie").each(function(index, image) {
  $this = $(image);
    if (title == image.innerText && this.getAttribute("id")=="favourite"){
      console.log("this should print every time");
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
	//var text = this.rows[0].innerText;

var el = $(this).find(" td.postbody")[0],
    child = el.firstChild,
    texts = [];

while (child) {
    if (child.nodeType == 3) {
        texts.push(child.data);
    }
    child = child.nextSibling;
}

var text = texts.join("");

	//var text = $(this).find(" td.postbody")[0].innerText;
console.log(text);
	var author = $(this).find(" dt.author")[0].innerText;
    var x = new RegExp("(http|https)://(vine)\.(co)/v/[A-Za-z0-9]+");

for(var j in filter177){

  var h = new RegExp(j, 'gi');
  console.log(j);
  console.log(h);
  var t = h.exec(text);
  console.log(h.test(text))
  console.log(t);
  if (t != null){
  $(this).find(" td.postbody")[0].innerText=$(this).find(" td.postbody")[0].innerText.replace(t, filter177[j])
  //$(this).find(" td.postbody")[0].innerText = text;
}
}

//  var r = new RegExp("\bdaniel bryan\b");
  var re = /\bdaniel bryan\b/;
  //console.log(re);
//  var m;
//  m = re.exec(text);

//  if (m != null){
//   console.log(m[0]);
//   $(this).find(" td.postbody")[0].innerText=$(this).find(" td.postbody")[0].innerText.replace(re,"vanilla midget");
//   console.log(text);
//   //$(this).find(" td.postbody")[0].innerText = text;
// }
//text = text.replace("daniel bryan to vanilla midget","ASDASDASDASDWWWWW");
//console.log($(this).find(" td.postbody")[0].innerText);
      text = text.replace(/\bdaniel bryan\b/g, "vanillaasdasdas");
      $(this).find(" td.postbody")[0].innerText.replace('daniel bryan is a va', "dsdfsdfsdfsdfs");
      //console.log(this.length);
      //console.log("owned async");
      text = text.replace(/\"/g,"&quot;");
      text = text.replace(/d/g,"LOL");
      //console.log(text);
    //console.log(image);

    //$(this).find(" td.postbody")[0].innerText.replace('/\bdaniel bryan\b/', "dsdfsdfsdfsdfs");


    if (author == localStorage.user){
    $(this).find(" ul.postbuttons").append('<li><a href="https://twitter.com/share" class="twitter-share-button" data-url="manas" data-text="'+text+'" data-count="none" data-dnt="true">Tweet</a></li>');


          if (x.test(text)){
        var url2 = x.exec(text);
       $(this).find(" td.postbody")[0].innerText.replace('/\b('+url2[0]+')\b/g', "dsdfsdfsdfsdfs");

              //console.log($(this).find(" td.postbody")[0].innerText);
       $(this).find(" td.postbody").append('<iframe class="vine-embed" src="'+url2[0]+'/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>');
       $(this).find(" td.postbody")[0].innerText.replace("daniel bryan to vanilla midget","ASDASDASDASDWWWWW");
   }
 	}
  

 });


});
