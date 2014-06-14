var totarr = [];

  var ip=0;
  process()
  function process() {
    //console.log(ip)
      if (i <= 2479) {
          //ip = 0 + i;
          //console.log(ip)
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
                    var type = "'"+$($this.find("td")[0]).text()+"'"
                    var date = $($this.find("td")[1]).text()
                    var jerk = "'"+$($this.find("td")[2]).text()+"'"
                    //console.log($($this.find("td")[4]).text())
                    var n = "'"+$($this.find("td")[4]).text()+"'"
                    var len = $($this.find("td")[3]).text()
                    var approved = "'"+$($this.find("td")[5]).text()+"'"
                    var d1 = dateReg.exec(date)
                    var t1 = timeReg.exec(date)
                    //console.log(type)
                    if (type == "'PROBATION'"){
                      //console.log("TYPE RIGHT")
                      var length = probReg.exec(len)
                      //console.log(len)
                      var reason = "'"+length[1]+"'"
                      var l = length[2]
                      var timeType = length[3]
                      if (timeType=="hours") var finTime = l/24;
                      else if (timeType=="day" || timeType=="days") finTime = l;
                      else if (timeType=="week") finTime = l*7;
                      else finTime = 30;
                      }
                    else{
                      var reason = "'"+len+"'"
                      var finTime = "''"
                    } 
                    if (length != null){
                      //console.log(length)
                      //console.log(length[2])
                    } 
                    //console.log(l)

                     
                    var timeFin;
                    if (d1 != null ) finDate = "'"+d1[0]+"'"
                    if (d1 == null) finDate = "741852963"
                    if (t1 != null ){
                      var time = t1[2]
                      //console.log(time)
                      var hours = Number(time.match(/^(\d+)/)[1]);
                      var minutes = Number(time.match(/:(\d+)/)[1]);
                      var AMPM = t1[3]
                      //console.log(AMPM)
                      if(AMPM == "pm" && hours<12) hours = hours+12;
                      if(AMPM == "am" && hours==12) hours = hours-12;
                      var sHours = hours.toString();
                      var sMinutes = minutes.toString();
                      if(hours<10) sHours = "0" + sHours;
                      if(minutes<10) sMinutes = "0" + sMinutes;

                      timeFin = "'"+sHours + ":" + sMinutes+"'"
                    }//console.log(t1[3] + "    " + t1[2])
                    //var temp = [type, finDate, timeFin, jerk, reason, finTime, n, approved]
                    //console.log(temp)
                    //totarr.push(temp)
                    //console.log(type + ", " + finDate + ", " + timeFin + ", " + jerk + ", " + reason + ", " + finTime + ", " + n + ", " + approved)
                    console.log(type + ", " + finDate + ", " + timeFin + ", " + jerk + ", " + finTime + ", " + n + ", " + approved)
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