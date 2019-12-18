// Tabs
function openPage(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var courses;
// Initially hide irrelevant courses when page loads
function initializeCourses() {
    courses = document.getElementsByClassName("class");
    for (i = 0; i < courses.length; i++) {
        if (!courses[i].classList.contains("relevant")) {
            courses[i].style.display = "none";
        }
    }
    // Listen for button clicks.
    var toggle = document.getElementById("coursework-toggle");
    toggle.addEventListener("click", toggleCoursework);
    toggle.textContent = showAllText;
}
document.addEventListener("DOMContentLoaded", initializeCourses);

var showAll = false;
var showAllText = "[show all courses]";
var showRelevantText = "[show only relevant courses]";
// Relevant vs. all coursework
function toggleCoursework() {
    // Do the toggle.
    showAll = !showAll;

    courses = document.getElementsByClassName("class");
    for (var i = 0; i < courses.length; i++) {
        if (showAll) {
            courses[i].style.display = "";
        } else if (!courses[i].classList.contains("relevant")) {
            courses[i].style.display = "none";
        }
    }

    // Fix up the button text
    if (showAll) {
        document.getElementById("coursework-toggle").textContent = showRelevantText;
    } else {
        document.getElementById("coursework-toggle").textContent = showAllText;
    }
}
