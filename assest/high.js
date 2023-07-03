
var highscoresList = document.querySelector("#HSlist");
var highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")) || [];


var addUser = JSON.parse(localStorage.getItem("newHighScoreAdded"));



if (addUser) {
    saveArray(addUser);
    listItem();
    console.log("user is " + addUser.userName);
    console.log("score is :" + addUser.newScore);
    localStorage.removeItem("newHighScoreAdded");
} else {
    listItem();
}

function saveArray(scoreEntry) {
    highScoreArray.push(scoreEntry);
    highScoreArray.sort(function (a, b) { return b.newScore - a.newScore });
    console.log(highScoreArray);
    localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
}

function listItem() {
    for (i = 0; i < highScoreArray.length; i++) {
        var newlistItem = document.createElement("li");
        newlistItem.appendChild(document.createTextNode(`${highScoreArray[i].userName} : ${highScoreArray[i].newScore}`));
        highscoresList.appendChild(newlistItem);
    }
}







