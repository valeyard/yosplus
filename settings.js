document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('kill-buzz');

    // set the initial state of the checkbox
    var is_already_a_buzzkill = localStorage["be_a_buzzkill"];
    console.log(is_already_a_buzzkill);
    console.log("is it printing this")
    if(is_already_a_buzzkill == "true"){
        input.checked = true;
    } else {
        input.checked = false;
    }

    input.addEventListener("change", function(){
        localStorage["be_a_buzzkill"] = input.checked;
    });

        //Fetch all contents
    chrome.storage.local.get(null,function (obj){
        console.log(JSON.stringify(obj));
    });
    //Set some content from browser action
    chrome.storage.local.set({"xx":"Another awesome Content"},function (){
        console.log("Storage Succesful");
    });


});