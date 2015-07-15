//scrape ignore list
var igName = g.iglist
$("input.bginput").each(function(index, image) {
    $this = $(image)
    if ($this.attr("type") == "text") var name = $this.attr("value")
    if (name != undefined) igName.push(name)
});
chrome.storage.sync.set({
    "iglist": igName
})