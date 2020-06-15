// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggle.addEventListener("click", function() {
    //REFACTORED BELLOW TO MAKE CLEANER
    /*
        const linkClasses = links.classList;

        if(linkClasses.contains("show-links")){
            linkClasses.remove("show-links");
        } else {
            linkClasses.add("show-links");
        }*/

    links.classList.toggle("show-links");
});