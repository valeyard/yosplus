    var i = 1;
    var totarr = [];
    var htr = 'http://forums.somethingawful.com/search.php?action=results&requestid=8104380&pagenumber='
    var ip=0;
      
      function process() {
        //console.log("£sdasda")
          if (i <= 2479) {
              //ip = 0 + i;
              //console.log("asdasdaw")
              url = htr + i
              //console.log(url)
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                      //alert(xhr.responseText)
                      $this = $(xhr.responseText)
                      $this.find("tr").each(function(index, image){
                        $this = $(image)

                        var date = "\""+$($this.find("td")[6]).text() + "\""

                        
                        console.log(date)
                        //console.log(rg.exec(len))
                        // if (rg.exec(len) == null){
                        //   if (modnames.hasOwnProperty(n)) modnames[n] = modnames[n] + 1
                        //   else modnames[n] = 1
                        // }
                        //console.log(modnames)
                      });
                      i++
                      //console.log(ip)
                      process()
                  }
              }
              xhr.send();
          } else {
              //alert("done")
              // var data = totarr;
              // var csvContent = "data:text/csv;charset=utf-8,";
              // data.forEach(function(infoArray, index){
              //     console.log(infoArray)
              //    dataString = infoArray.join(",");
              //    console.log(csvContent)
              //    console.log(index < infoArray.length)
              //    console.log(index)
              //    console.log(infoArray.length)
              //    csvContent += index < infoArray.length ? dataString+ "\n" : dataString;

              // }); 
              // var encodedUri = encodeURI(csvContent);
              // var link = document.createElement("a");
              // link.setAttribute("href", encodedUri);
              // link.setAttribute("download", "my_data.csv");

              // link.click(); // This will download the data file named "my_data.csv".
              // //console.log(modnames)
          }
      }
      process()