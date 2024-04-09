// script.js

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var url = link.getAttribute("href");
            loadPage(url);
        });
    });

    var form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            var formData = new FormData(form);
            var url = form.getAttribute("action");

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.status === "success") {
                        alert("Form submitted successfully!");
                    } else {
                        alert("Error submitting form!");
                    }
                }
            };
            xhr.send(formData);
        });
    }
});

function loadPage(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.body.innerHTML = xhr.responseText;
            history.pushState(null, null, url);
        }
    };
    xhr.send();
}
