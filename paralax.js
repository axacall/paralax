const paralax = document.getElementById("paralax");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    paralax.style.backgroundPositionY = offset * 0.7 + "px";
}) 