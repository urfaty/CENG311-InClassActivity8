$(document).ready(function() {
    $( "#birthday" ).datepicker();


    var proglan = [
        "ActionScript", "AppleScript", "Asp","JavaScript","Lisp","Perl","PHP","Phyton" ];

    $( "#proglan" ).autocomplete({
        source: proglan });
});