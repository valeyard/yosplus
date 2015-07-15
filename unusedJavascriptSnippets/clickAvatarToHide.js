
function clickToHideAvatar(post){
    $(post).find(".userinfo").click(function(event) {
        $this = $(event.target)
        event.stopPropagation();
        $(".title").toggle()
        var jet = !g.avatarHide;
        chrome.storage.sync.set({
            "avatarHide": jet
        }, function() {});
    });
}

if (g.avatarHideOption == false) $(".title").show()
if (g.avatarHideOption) { clickToHideAvatar(post) }

//show/hide avatar

$(".userinfo").each(function(index, image) {
    $this = $(image)
    $(".title").toggle(g.avatarHide)
});