$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    var textInput = $("input#textInput").val();
    var textInput2 = $("input#textInput").val();
    if (textInput === "Good Soup!" || textInput === "Lit!" || textInput === "Saw, dude!") {
        $("#input").text(textInput);
        $("griffin").show();
    } else {
        $("#input2").text(textInput2);
        $("griffinNo").show();
    }
    $("form").hide();
  });
});
