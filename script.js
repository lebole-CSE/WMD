function searchTopic() {
    var search = document.getElementById("searchBox").value;

    if (search == "") {
        alert("Please type a science topic.");
    } else {
        alert("You searched for: " + search);
    }
}

function checkQuiz(event) {
    event.preventDefault();

    var score = 0;
    var totalQuestions = 15;

    for (var i = 1; i <= totalQuestions; i++) {
        var answer = document.querySelector('input[name="q' + i + '"]:checked');

        if (answer && answer.value == "correct") {
            score++;
        }

        if (answer && answer.name == "q2" && answer.nextSibling.textContent.trim().charAt(0) == "0") {
            score++;
        }
    }

    alert("You scored " + score + " out of " + totalQuestions);
}

function sendFeedback(event) {
    event.preventDefault();
    alert("Thank you for your feedback.");
}

function postQuestion(event) {
    event.preventDefault();
    alert("Your question has been posted.");
}
