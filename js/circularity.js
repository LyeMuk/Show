const cards = document.querySelectorAll(".circularity .row .card");

function myFunction() {
    if (cards.length % 2 == 1) {
        let md = window.matchMedia("(max-width : 1024px)")
        if (md.matches) {
            cards[cards.length - 1].style.flex = "100%"
        } else {
            cards[cards.length - 1].style.flex = "0 0 50%"
        }
    }
}
myFunction()
window.addEventListener('resize', myFunction)

cards.forEach((card, index) => {
    if (index % 2 == 1) {
        card.classList.add("reverse")
    }
})
