//Variables
//Init (zero) variable
var nullVarCount = 0;
var leftInit = 9;
var guessesTryAtmpt = 0;

//Random letters generator
function makeRnd() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 1; i++) //This is count change random string lenght with i
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
var rndLetter = makeRnd();  
//Init value for counts
var wCount = 0;
var lCount = 0;
//Pressed key registration
$(document).keypress(function(event){
    guessesTryAtmpt++;
    $("#guessesTry").html(guessesTryAtmpt);
    //Get random letters from makeRnd function
    console.log(rndLetter);
    //var rndLetter = 't';
    //Catching press letter
    var pressLetter = String.fromCharCode(event.which);
    //Converting letter to lowercase
    var convertLetter = pressLetter.toLowerCase();
    //Condition for creating simple programming logic
    if(rndLetter === convertLetter){
        wCount++;
        $("#winsRes").html(wCount);
        rndLetter = makeRnd();
    } else {
        lCount++;
        leftInit--;
        $("#guessesLeft").html(leftInit);
        $("#lossesRes").html(lCount);
        if(leftInit === 0){
            $("#guessesLeft").html("You loose! Please wait reloading page");
            setTimeout(
                function() 
                {
                    location.reload();
                }, 5000);
            
        }
    } 
});

//Visualisation
$("#winsRes").html(nullVarCount);
$("#lossesRes").html(nullVarCount);
$("#guessesLeft").html(leftInit);
$("#guessesTry").html(guessesTryAtmpt);

