function check(quizNum) {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 == "T") { correct++; } else {}
    if (question2 == "T") { correct++; } else {}
    if (question3 == "T") { correct++; } else {}
    if (question4 == "T") { correct++; } else {}

    var messages = ["ČESTITAM, ODLIČNO ODRAĐENO!", "BIO SI OK!", "IPAK BI TREBAO PONOVITI GRADIVO..."];
    var pictures = ["../pictures/Great.gif", "../pictures/Ok.gif", "../pictures/Fail.gif"]

    var score;


    correct <= 2 ? score = 2 : score;
    (correct == 3) ? score = 1: score;
    correct == 4 ? score = 0 : score;



    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("quiz").style.cssFloat = "left";
    document.getElementById("number_correct").innerHTML = "Ostvario si " + correct + " točnih odgovora.";
    document.getElementById("picture").src = pictures[score];
    document.getElementById("button").style.visibility = "hidden";

}