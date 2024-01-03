
let background = document.querySelector(".backgr")
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    background.classList.toggle("dark");
    themeName.innerText = background.classList.contains("dark") ? "jasny" : "ciemny";
});

