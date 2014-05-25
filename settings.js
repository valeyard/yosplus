document.addEventListener('DOMContentLoaded', function(){

  var storage = chrome.storage.sync;

//Retrieve existing settings
$(':checkbox').each(function(index, element) {
    var name = this.name;
    storage.get(name, function(items) {
        element.checked = items[name]; // true  OR  false / undefined (=false)
    });
});

  $(".checkboxes").on("change", ":checkbox", saveSettings);
  $('.set').click(function(event) {
    chrome.storage.sync.set({"iglist":[], "oldbread":false, "lazyload":false, "avatarHideOption":false, "snypeAudio":true, "snype":false, "fflist":{}, "signature":false, "quote":true, "avatarHide":false, "ads":true,"embedTweet":true,"tweet": false, "vine":true, "filter":true, "webm":true, "tree":false, "cats": {"Favourites":true, "Main": true, "Discussion": true, "The Finer Arts": true, "The Community": true, "Archives": true}},function (){
});
  })
function saveSettings() {
    var name = this.name;
    var items = {};
    items[name] = this.checked;
    storage.set(items, function() {
        console.log("saved");
    });
}


});