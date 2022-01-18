let Pieces = []; 
let userInput;
$(".add").click(function(){
    userInput = $(".picture-url").val();
    Pieces.push(".picture-url");
  	$(".gallery").append("<img src=" + userInput + ">");
$("input:text").val(" ");
});
