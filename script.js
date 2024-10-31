const carousel = document.querySelector(".carousel");
const arrowButtons = document.querySelectorAll(".card_slider i");
const firstCardWidth = document.querySelector(".card").offsetWidth;

arrowButtons.forEach(
    btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left_slider_button" ? -firstCardWidth : firstCardWidth;
        })
    }
);