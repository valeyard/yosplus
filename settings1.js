// document.addEventListener('DOMContentLoaded', function(){

//     var input = document.getElementById('kill-buzz');

//     // set the initial state of the checkbox
//     var is_already_a_buzzkill = localStorage["be_a_buzzkill"];
//     if(is_already_a_buzzkill == "true"){
//         input.checked = true;
//     } else {
//         input.checked = false;
//     }

//     input.addEventListener("change", function(){
//         localStorage["be_a_buzzkill"] = input.checked;
//     });


// });
console.log("outside the listener");
document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('tweet');
    console.log("een get here?")

    // set the initial state of the checkbox
    var is_already_a_buzzkill = localStorage["be_a_buzzkill"];
    if(is_already_a_buzzkill == "true"){
        input.checked = true;
    } else {
        input.checked = false;
    }

    input.addEventListener("change", function(){
        console.log(input.checked)
        localStorage["be_a_buzzkill"] = input.checked;
    });


});