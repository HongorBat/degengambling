
function displayBetResult(){
    console.log("Button clicked")
    var randomInt = getRandomInteger();
    var textToShow;
    console.log(randomInt);
    switch(randomInt){
        case 0:
            // first team
            textToShow = "First Team";
            break;
        case 1:
            // second team
            textToShow = "Second Team";
            break;
        default:
            //draw
            textToShow = "It is DRAW"
    }

    document.getElementById("result").innerHTML = textToShow;

}

function getRandomInteger(){
    return Math.floor(Math.random() * 3);
}