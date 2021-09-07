
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores from local storage
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives from local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
// if there is data in the local storage 
if (allScores !== null) {
    // For all the entries for highscores
    for (var i = 0; i < allScores.length; i++) {
        //create a list element 
        var createLi = document.createElement("li");
        //Add the highscores and initials to the list element
        createLi.textContent = allScores[i].initials + " " +allScores[i].score;
        //Append the dynamically created li element to the existing ul element
        highScore.appendChild(createLi);

    }
}

// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});