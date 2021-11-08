const chapter = document.querySelector(".buttons")
const season = document.querySelector(".seasons")

ep.addEventListener("click", () => {
    chapter.hidden = false;
    season.hidden = true;
})

se.addEventListener("click", () => {
    chapter.hidden = true;
    season.hidden = false;
});