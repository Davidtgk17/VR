const cards = document.querySelectorAll(".homepage__service__grid__el");

cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
        let btnLearnMore = card.querySelector(
            ".homepage__service__grid__el__button"
        );
        const text = card.querySelector(".homepage__service__grid__el__desc");
        text.style.opacity = "0.6";
        text.style.transform = "translateY(-10px)";
        btnLearnMore.style.opacity = "1";
        btnLearnMore.style.transform = "translateY(0px)";
    });
});

cards.forEach((card) => {
    card.addEventListener("mouseout", function () {
        let btnLearnMore = card.querySelector(
            ".homepage__service__grid__el__button"
        );
        const text = card.querySelector(".homepage__service__grid__el__desc");
        text.style.opacity = "1";
        text.style.transform = "translateY(0px)";
        btnLearnMore.style.opacity = "0";
        btnLearnMore.style.transform = "translateY(40px)";
    });
});

ScrollReveal().reveal(".welcome__people", {
    distance: "100px",
    duration: 1500,
    origin: "right",
});

ScrollReveal().reveal(".welcome__left", {
    distance: "100px",
    duration: 1500,
    origin: "left",
});

ScrollReveal().reveal(".welcome__happy-client-img-text", {
    distance: "100px",
    duration: 1500,
    origin: "bottom",
    delay: 1000,
});

ScrollReveal().reveal(".welcome__happy-client-video", {
    distance: "100px",
    duration: 1500,
    origin: "bottom",
    delay: 1000,
});

ScrollReveal().reveal(".welcome__about__card-1", {
    distance: "50px",
    duration: 500,
    origin: "bottom",
});

ScrollReveal().reveal(".welcome__about__card-2", {
    distance: "50px",
    duration: 500,
    origin: "bottom",
    delay: 1000,
});

ScrollReveal().reveal(".welcome__about__card-3", {
    distance: "50px",
    duration: 500,
    origin: "bottom",
    delay: 2000,
});

ScrollReveal().reveal(".homepage__aboutUs__right__text", {
    distance: "50px",
    duration: 500,
    origin: "slide-up",
});

ScrollReveal().reveal(".homepage__choose___left", {
    distance: "100px",
    duration: 1000,
    origin: "left",
});

ScrollReveal().reveal(".homepage__choose___right", {
    distance: "100px",
    duration: 1000,
    origin: "right",
});

const accardeonEl = document.querySelectorAll(
    ".homepage__choose___left__accordeon___el__title__Right"
);
accardeonEl.forEach((card) => {
    card.onclick = function () {
        const partentEl = card.closest(".homepage__choose___left__accordeon");
        const cardImg = card.querySelector("img");
        const text = partentEl.querySelector(
            ".homepage__choose___left__accordeon___el__desc"
        );
        console.log(text);
        cardImg.classList.toggle(
            "homepage__choose___left__accordeon___el__title__Right__active"
        );
        text.classList.toggle(
            "homepage__choose___left__accordeon___el__desc__active"
        );
    };
});
