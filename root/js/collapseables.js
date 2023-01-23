var dropdownHeaders = document.querySelectorAll(".dropdown-div-header");
for (var i = 0; i < dropdownHeaders.length; i++) {
    var dropdownContent = dropdownHeaders[i].nextElementSibling;
    var collapseIcon = dropdownHeaders[i].querySelector(".collapse-icon");
    dropdownHeaders[i].addEventListener("click", function(event) {
        event.stopPropagation();
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            collapseIcon.innerHTML = "+";
        } else {
            dropdownContent.style.display = "block";
            collapseIcon.innerHTML = "-";
        }
    });
}
