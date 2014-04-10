chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
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
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        localStorage.be_a_buzzkill = true;
        console.log(localStorage);
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

chrome.storage.local.set({"tweet": true, "vine":true, "filter":true},function (){
});



