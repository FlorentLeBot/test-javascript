function search() {
  let input = document.querySelector("#search").value;
  input = input.toLowerCase();
  let search = document.querySelectorAll(".table-item");

  for (let i = 0; i < search.length; i++) {
    if (!search[i].innerHTML.toLowerCase().includes(input)) {
      search[i].style.display = "none";
    } else {
      search[i].style.display = "block";
    }
  }
}

// let sideNav = document.querySelector(".side-nav");
// let links = sideNav.querySelectorAll(".bloc-link");

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function () {
//     let current = document.querySelector(".active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
// Get the container element
let sideNav = document.getElementById("side-nav");

// Get all buttons with class="btn" inside the container
let links = sideNav.getElementsByClassName("bloc-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i <= links.length; i++) {
  links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 