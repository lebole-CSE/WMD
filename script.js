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

    if (nav) {
        var button = document.createElement("button");
        button.innerHTML = "☰";
        button.className = "menuButton";
        button.onclick = toggleMenu;

        nav.parentNode.insertBefore(button, nav);
    }
}

function toggleMenu() {
    const nav = document.querySelector("nav");

    const menuButton = document.querySelector('.menuButton');
    menuButton.addEventListener('click',() => {
        nav.classList.toggle('open');
    });

function makeNavSearch() {
    var header = document.querySelector("header");

    if (header && !document.getElementById("searchBox")) {
        var searchForm = document.createElement("form");
        searchForm.className = "navSearch";
        
        searchForm.onsubmit = function(event) {
            event.preventDefault();
            searchTopic();
        };

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
