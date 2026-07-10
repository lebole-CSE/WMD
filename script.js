function searchTopic() {
    var search = document.getElementById("searchBox").value;

    if (search == "") {
        alert("Please type a science topic.");
    } else {
        alert("You searched for: " + search);
    }
}


function sendFeedback(event) {
    event.preventDefault();
    alert("Thank you for your feedback.");
}

function postQuestion(event) {
    event.preventDefault();
    alert("Your question has been posted.");
}

function makeMenuButton() {
    var nav = document.querySelector("nav");

    if (nav&& !document.querySelector(".menuButton")) {
        var menuButton = document.createElement("button");
        menuButton.innerHTML = "☰";
        menuButton.className = "menuButton";
        menuButton.setAttribute("aria-label", "Open navigation menu");

        menuButton.addEventListener("click", function() {
            nav.classList.toggle("open");
        });

        nav.parentNode.insertBefore(menuButton, nav);
    }
}

function makeNavSearch() {
    var nav = document.querySelector("nav");

    if (nav && !document.getElementById("searchBox")) {
        var searchForm = document.createElement("form");
        searchForm.className = "navSearch";
        
      searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            searchTopic();
        });
        
        var input = document.createElement("input");
        input.type = "text";
        input.id = "searchBox";
        input.placeholder = "Search topic";

        var button = document.createElement("button");
        button.type = "submit";
        button.innerHTML = "Search";

        searchForm.appendChild(input);
        searchForm.appendChild(button);
        header.insertAdjacentElement("afterend",searchForm);
    }
}

function makeHelpIcon() {
    var help = document.createElement("a");
    help.href = "feedback.html";
    help.className = "helpIcon";
    help.title = "Help";
    help.setAttribute("aria-label", "Help");
    help.innerHTML = "?";

    document.body.appendChild(help);
}

makeMenuButton();
makeNavSearch();
makeHelpIcon();
