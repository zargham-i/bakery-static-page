const carousel = document.querySelector(".carousel");
const arrowButtons = document.querySelectorAll(".card_slider i");

arrowButtons.forEach(
    btn => {
        btn.addEventListener("click", () => {
            cardWidth = document.querySelector(".card").offsetWidth + 20;
            if (btn.id === "left_slider_button") {
                carousel.scrollLeft -= cardWidth;
            }
            else {
                carousel.scrollLeft += cardWidth;
            }
        })
    }
);
