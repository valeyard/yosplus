$(".category").each(function(index, image){
  $this = $(image);
  //console.log($this[0].innerText)
  
  //console.log($this[0].parent().nextUntil("tr.section"));
  //image.show(main);
  //console.log(g.cats[image.innerText])
 // $this.innerText = image.innerText + "Click here to collapse forums";

var geg = new RegExp("([A-Za-z0-9]+) -")
console.log(image.innerText + " ROFL INNERTEXT")
var fname = geg.exec(image.innerText)
console.log(geg.test(image.innerText))
console.log(fname)
var main;
main = !g.cats[fname[1]]
//g.cats[fname[1]] = main;

  $this.parent().nextUntil("tr.section").toggle(g.cats[fname]);
 // $this[0].innerText = $this[0].innerText + " - Click here to collapse category"
 if (!main) $this[0].innerTex = fname[1] + " - Click here to expand category"
else $this[0].innerTex = fname[1] + " - Click here to collapse category"

});

 html2canvas(data, {
    onrendered: function(canvas) {
        var g = canvas.toDataURL("image/png")
        $('#tweet' + counter).html(data.html);
    }
});