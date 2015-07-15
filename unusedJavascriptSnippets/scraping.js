            var i = 1;
        var datec;
        var totarr = [];
        var htr = 'http://forums.somethingawful.com/search.php?action=results&requestid=8178892&pagenumber='
        var ip = 0;


        // $(".threadbar").prepend('<input type="button" class="lol" value="history"/> <input type="text" id="user" value="user"/>')
        // $(".lol").click(function(event) {
        //   console.log($("#user").val())
        //   process($("#user").val())
        // })

    function process(user) {
        //console.log("£sdasda")
        if (i <= 260) {
              //ip = 0 + i;
              //console.log("asdasdaw")
              url = htr + i
              console.log(url)
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                      //alert(xhr.responseText)
                      $this = $(xhr.responseText)
                      $this.find("tr").each(function(index, image){
                        $this = $(image)

                        var date = "\""+$($this.find("td")[6]).text() + "\"\n"
                        date = date.replace(/([A-Za-z]+[ ]+[0-9]+), ([0-9]+) ([0-9]+:[0-9]+)/, "$2 $1 $3:00")

                        if (date!="\""+"\"\n") datec+= date;
                        //console.log(date)
                        //console.log(rg.exec(len))
                        // if (rg.exec(len) == null){
                        //   if (modnames.hasOwnProperty(n)) modnames[n] = modnames[n] + 1
                        //   else modnames[n] = 1
                        // }
                        //console.log(modnames)
                      });
                      i++
                      //console.log(ip)
                      process(user)
                    }
                  }
                  xhr.send();
                } else {
                  console.log(datec)
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