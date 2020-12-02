"use strict"

$(document).ready(function(){
    $("#submit").click(function() {
        window.location.href = 'submit.html';
    }); 

    $("#clear").click(function() {
        $('#content').empty();
    }); 
})