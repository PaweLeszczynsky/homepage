let buttonOne = document.querySelector(".buttonOne");
let tlo = document.querySelector(".background");
let buttonTwo = document.querySelector(".buttonThemelight");
let lightdarkicon = document.querySelector(".lightModeicon");

buttonOne.addEventListener("click", () => {
    //W celu ćwiczenia zmiana tekstu w przycisku
    buttonOne.innerText = buttonOne.innerText === "Light Mode" ? "Dark Mode" : "Light Mode"
});
buttonTwo.addEventListener("click", () => {
    buttonTwo.classList.toggle("buttonThemedark");
    tlo.classList.toggle("dark");
    document.getElementById("light").src = tlo.classList.contains("dark") ? "images/night-mode.png" : "images/brightness.png"
});

