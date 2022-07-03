let tlo = document.querySelector(".background");
let buttonTwo = document.querySelector(".buttonThemelight");
let lightdarkicon = document.querySelector(".lightModeicon");


    buttonTwo.addEventListener("click", () => {
    buttonTwo.classList.toggle("buttonThemedark");
    tlo.classList.toggle("dark");
    document.getElementById("light").src = tlo.classList.contains("dark") ? "images/night-mode.png" : "images/brightness.png"
});

