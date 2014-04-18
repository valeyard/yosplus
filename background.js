chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    //chrome.storage.local.set({"tweet": true, "vine":true, "filter":true, "webm":true},function (){
// });
    chrome.pageAction.setTitle({
        tabId: tab.id,
        title: "YosPlus Settings"
    });
});

// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
	console.log("ASASDASDASDASDASDA")
    if(details.reason == "install"){
        console.log("This is a first install!");
        chrome.storage.sync.set({"signature":true, "quote":true, "avatarHide":true, "ads":true,"embedTweet":true,"tweet": false, "vine":true, "filter":true, "webm":true, "tree":false, "cats":{"Main": true, "Discussion": true, "The Finer Arts": true, "The Community": true, "Archives": true}},function (){
});
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        localStorage.be_a_buzzkill = true;
        console.log(localStorage);
        chrome.storage.sync.set({"signature":true, "quote":true, "avatarHide":true, "ads":true,"embedTweet":true,"tweet": false, "vine":true, "filter":true, "webm":true, "tree":false, "cats": {"Main": true, "Discussion": true, "The Finer Arts": true, "The Community": true, "Archives": true}},function (){
});
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

// chrome.storage.local.set({"tweet": true, "vine":true, "filter":true},function (){
// });



