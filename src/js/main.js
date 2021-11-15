const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1500,

    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const burger = () => {
    const burger = document.querySelector(".burger");
    // const menu = document.getElementsByClassName("menu")[0];
    // const menu_link = document.getElementsByClassName("menu__link");

    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        // menu.classList.toggle("open");
    });
};
burger();