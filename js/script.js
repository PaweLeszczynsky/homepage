const buttonThemeColor = document.querySelector(".js-mainSection__buttonThemecontainer__buttonLightmode");
buttonThemeColor.addEventListener("click", () => {
    const backgroundColor = document.querySelector(".js-backgroundTheme");
    buttonThemeColor.classList.toggle("mainSection__buttonThemecontainer__buttonDarkmode");
    backgroundColor.classList.toggle("darkTheme");
    document.getElementById("themeChanger").src = backgroundColor.classList.contains("darkTheme") ? "images/night-mode.png" : "images/brightness.png"
});

