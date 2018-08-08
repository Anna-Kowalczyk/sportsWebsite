document.addEventListener("DOMContentLoaded", function(event) {
    var hamburger = document.querySelector(".hamburger");
    var menu = document.querySelector("#menu");
    var dropdown = document.querySelector(".sports-section");

    hamburger.addEventListener("click",function() {
        menu.classList.toggle("toggle");
    });

    dropdown.addEventListener("click",function(e) {
        dropdown.classList.toggle("show");
        console.log(e.target.classList.value==="title",e.target.parentNode.nextElementSibling);
        if (e.target.classList.value==="title") {
          e.target.parentNode.nextElementSibling.classList.toggle("show");

        } else {
          e.target.nextElementSibling.classList.toggle("show");
          e.target.parentNode.classList.toggle("show");          
        }

    });

});
