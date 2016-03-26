// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     chrome.pageAction.show(tabId);
//     //chrome.storage.local.set({"tweet": true, "vine":true, "filter":true, "webm":true},function (){
// // });
//     chrome.pageAction.setTitle({
//         tabId: tab.id,
//         title: "YosPlus Settings"
//     });
// });

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: 'forums.somethingawful.com'
                    }
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

  function myfunction(){
      var thisforum = $(this).parents('.forum'); //now thisforum contains your parent with class of forum
      console.log(thisForum)
    }

function checkSettings(g) {
    console.log(g)
    if (g.tweet == undefined) g.tweet = false;
    if (g.lazyload == undefined) g.lazyload = false;
    if (g.avatarHide == undefined) g.avatarHide = false;
    if (g.signature == undefined) g.siganture = false;
    if (g.quote == undefined) g.quote = true;
    if (g.webm == undefined) g.webm = true;
    if (g.vine == undefined) g.vine = true;
    if (g.filter == undefined) g.filter = false;
    if (g.embedTweet == undefined) g.embedTweet = true;
    if (g.boldname == undefined) g.boldname = true;
    if (g.oldbread == undefined) g.oldbread = false;
    if (g.cats == undefined) g.cats = {
        "Favourites": true,
        "Main": true,
        "Discussion": true,
        "The Finer Arts": true,
        "The Community": true,
        "Archives": true
    }
    if (g.fflist == undefined) g.fflist = {};
    if (g.snype == undefined) g.snype = false;
    if (g.snypeAudio == undefined) g.snypeAudio = false;
    if (g.avatarHideOption == undefined) g.avatarHideOption = false;
    if (g.ads == undefined) g.ads = true;
    if (g.tree == undefined) g.tree = false;
    if (g.youtubeHD == undefined){
     g.youtubeHD = true;
     console.log("unde")
     console.log(g.youtubeHD)
    }
            if (g.fyadMods == undefined){
             g.fyadMods = [];
            }
    console.log(g.test1)
    console.log(g["test1"])
    if (g.test1 == undefined) g.test1 = true;
    console.log(g)
    chrome.storage.sync.set(g, function() {
        console.log("savedNEW");
    });
    if (g.smilies == undefined){
                g.smilies = {};
            }
    if (g.autoplay == undefined){
                g.autoplay = true;
            }

}



// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
	console.log("ASASDASDASDASDASDA")
    if(details.reason == "install"){
        console.log("This is a first install!");
        chrome.storage.sync.set({"oldbread":false, "lazyload":false, "avatarHideOption":false, "snypeAudio":true, "snype":false, "fflist":{}, "signature":false, "quote":true, "avatarHide":false, "ads":true,"embedTweet":true,"tweet": false, "vine":true, "filter":true, "webm":true, "tree":false, "cats": {"Favourites":true, "Main": true, "Discussion": true, "The Finer Arts": true, "The Community": true, "Archives": true}},function (){
});
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        localStorage.be_a_buzzkill = true;
        // alert("UPDATE!@!~!~!@!~!~!@!~!@!\n\n- Added the yospos friendly emotes, mostly made by symbolic butt\n\n- username is highlighted in posts\n\n- fixed bug wich stopped most things from working lol\n\n")
        console.log(localStorage);
        //chrome.storage.sync.set({"snype":false, "fflist":{}, "signature":false, "quote":true, "avatarHide":true, "ads":true,"embedTweet":true,"tweet": false, "vine":true, "filter":true, "webm":true, "tree":false, "cats": {"Favourites":true, "Main": true, "Discussion": true, "The Finer Arts": true, "The Community": true, "Archives": true}},function (){
//});
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");

        // NEW SETTING SETTINGS ADD HERE
         var settings = ["fyadMods", "autoplay", "smilies", "test1", "youtubeHD", "boldname", "iglist", "oldbread", "lazyload", "avatarHideOption", "snypeAudio", "snype", "fflist", "signature", "quote", "avatarHide", "ads", "tweet", "filter", "vine", "webm", "cats", "main", "tree", "embedTweet"];


            chrome.storage.sync.get(settings, function(obj) {
        g = obj;
        checkSettings(g);

    })
    }
});

// chrome.storage.local.set({"tweet": true, "vine":true, "filter":true},function (){
// });

