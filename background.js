chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setTitle({
        tabId: tab.id,
        //title: 'url=' + tab.url
        title: "YosPlus Settings"

    });
    console.log(localStorage);
});
// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
	console.log("ASASDASDASDASDASDA")
    if(details.reason == "install"){
        console.log("This is a first install!");
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        localStorage.be_a_buzzkill = true;
        console.log(localStorage);
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
    else console.log("WHATTTTTTTT")
});

//Set some content from background page
// chrome.storage.local.set({"x":"Some awesome Content"},function (){
//     console.log("Storage Succesful");
// });
// var g = '<li class="smilie" draggable="true" id="favourite"> <div class="text">:(</div> <img alt="" src="http://fi.somethingawful.com/images/smilies/frown.gif" title="frown"> </li>';
// chrome.storage.local.set({'favourite': g},function (){
//     console.log("Storage Succesful");
// });

//get all contents of chrome storage
chrome.storage.local.get(null,function (obj){
        console.log(JSON.stringify(obj));
});



