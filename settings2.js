document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('kill-buzz');

    // set the initial state of the checkbox
    var is_already_a_buzzkill = localStorage.tweet;
    console.log(localStorage.tweet)
    if(is_already_a_buzzkill == "true"){
        input.checked = true;
    } else {
        input.checked = false;
    }

    input.addEventListener("change", function(){
        localStorage.tweet = input.checked;
    });


});