const headerSlider = () => {
	const headerSwiper = new Swiper(".header__slider", {
		loop: true,
		speed: 2500,

		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},

		pagination: {
			el: ".header__swiper-pagination",
			clickable: true,
		},
	});
};
headerSlider();

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

// анимация при скроле
const eventScroll = () => {
	// общий класс для всех элементов, которые нужно анимировать
	const animItems = document.querySelectorAll(".anim-items");

	// проверяем есть ли элементы для анимации
	if (animItems.length > 0) {
		window.addEventListener("scroll", animOnScroll);

		function animOnScroll() {
			animItems.forEach((item) => {
				const animItem = item;
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
					animItem.classList.add("active");
				} /*else {
					animItem.classList.remove("active");
				}*/
			});
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
		}
	}
};
eventScroll();

// работа вкладок в услугах
const servicesTabs = () => {
	const tabOne = document.getElementById("services__item-one");
	const tabTwo = document.getElementById("services__item-two");

	const listOne = document.getElementById("services__list-one");
	const listTwo = document.getElementById("services__list-two");

	const arrowOne = document.getElementById("arrow-one");
	const arrowTwo = document.getElementById("arrow-two");

	const gridRow = document.querySelector(".services__items");

	tabOne.addEventListener("click", () => {
		if (!tabOne.classList.contains("active") && !listOne.classList.contains("active")) {
			tabOne.classList.toggle("active");
			listOne.classList.toggle("active");
			arrowOne.classList.toggle("active");

			if (window.innerWidth <= 768) {
				gridRow.style.gridTemplateRows = "31px 1fr 31px 0";
			}
		}

		if (tabTwo.classList.contains("active") && listTwo.classList.contains("active")) {
			tabTwo.classList.toggle("active");
			listTwo.classList.toggle("active");
			arrowTwo.classList.toggle("active");
		}
	});

	tabTwo.addEventListener("click", () => {
		if (!tabTwo.classList.contains("active") && !listTwo.classList.contains("active")) {
			tabTwo.classList.toggle("active");
			listTwo.classList.toggle("active");
			arrowTwo.classList.toggle("active");

			if (window.innerWidth <= 768) {
				gridRow.style.gridTemplateRows = "31px 0 31px 1fr";
			}
		}

		if (tabOne.classList.contains("active") && listOne.classList.contains("active")) {
			tabOne.classList.toggle("active");
			listOne.classList.toggle("active");
			arrowOne.classList.toggle("active");
		}
	});
};

servicesTabs();

const technologiesTabs = () => {
	const jsTrigger = document.querySelectorAll(".js-tab-trigger");

	jsTrigger.forEach((item) => {
		item.addEventListener("click", () => {
			let tabName = item.getAttribute("data-tab");

			let tabContent = document.querySelector('.js-tab-content[data-tab="' + tabName + '"]');

			document.querySelectorAll(".js-tab-content.active").forEach((item) => {
				item.classList.remove("active");
			});

			tabContent.classList.add("active");

			document.querySelectorAll(".js-tab-trigger.active").forEach((item) => {
				item.classList.remove("active");
			});

			item.classList.add("active");
		});
	});
};

technologiesTabs();

const technologiesAction = () => {
	const plus = document.querySelectorAll(".tabs__content-info");

	plus.forEach((item) => {
		item.addEventListener("click", () => {
			let plusInfo = item.querySelectorAll(".tabs__content-hover");

			plusInfo.classList.add("active");
		});
	});
};

technologiesAction();

// const projectsSlider = () => {
// 	const projectsSwiper = new Swiper(".projects__slider", {
// 		loop: false, // бесконечный слайдер отключаем, так как вместе со скроллом, не совместимы
// 		speed: 1000, // скорость
// 		slidesPerView: 3, // количество слайдов для показа (можно указывать например 2.8 слайда)
// 		// navigation: {
// 		// 	// стрелки навигации
// 		// 	nextEl: ".projects__swiper-next",
// 		// 	prevEl: ".projects__swiper-prev",
// 		// },
// 		watchOverFlow: true, // отключает функционал, если слайдов маньше, чем нужно
// 		simulateTouch: true, // включение перетаскивания на компьютере
// 		spaceBetween: 19, // размер отступа, между слайдами

// 		// брейк поинты для разной ширины экрана
// 		// breakpoints: {
// 		// 	320: {
// 		// 		// slidesPerView: 2.2,
// 		// 	},

// 		// 	480: {
// 		// 		// количество слайдов для показа (можно указывать например 2.8 слайда)

// 		// 		slidesPerView: "auto",
// 		// 	},

// 		// 	// ширина >= 1230px
// 		// 	1300: {
// 		// 		// количество слайдов для показа (можно указывать например 2.8 слайда)
// 		// 		slidesPerView: 3,

// 		// 		navigation: {
// 		// 			nextEl: ".projects__swiper-next",
// 		// 			prevEl: ".projects__swiper-prev",
// 		// 		},
// 		// 	},
// 		// },

// 		// pagination: {
// 		// 	el: ".projects__swiper-pagination",
// 		// 	type: "progressbar",
// 		// },

// 		// scrollbar: {
// 		// 	// el: ".projects__swiper-scroll",
// 		// 	el: ".swiper-scrollbar",

// 		// 	// возможность перетаскивания скролл
// 		// 	draggable: true,

// 		// 	// размер ползунка
// 		// 	dragSize: 80,
// 		// },
// 	});
// };

const projectsSlider = () => {
	const projectsSwiper = new Swiper(".projects__slider", {
		loop: false, // бесконечный слайдер отключаем, так как вместе со скроллом, не совместимы
		speed: 1500, // скорость
		// slidesPerView: 3, // количество слайдов для показа (можно указывать например 2.8 слайда)
		spaceBetween: 19, // размер отступа, между слайдами
		watchOverFlow: true, // отключает функционал, если слайдов маньше, чем нужно
		simulateTouch: true, // включение перетаскивания на компьютере
		scrollbar: {
			el: ".swiper-scrollbar",
			dragSize: 80, // размер бегунка
			draggable: true, // возможность перетаскивания скролл
		},
		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},

		breakpoints: {
			// ширина >= 320px
			300: {
				slidesPerView: 1.41,
			},

			350: {
				slidesPerView: 1.45,
			},

			400: {
				slidesPerView: 1.6,
			},

			450: {
				slidesPerView: 1.8,
			},

			500: {
				slidesPerView: 2.2,
			},

			550: {
				slidesPerView: 2.5,
			},

			// ширина >= 660px
			660: {
				slidesPerView: 2.5,
			},

			768: {
				slidesPerView: 2.1,
			},

			800: {
				slidesPerView: 2.5,
			},

			// ширина >= 940px
			940: {
				slidesPerView: 3,
			},
		},
		// pagination: {
		// 	el: ".projects__scroll-count",
		// 	type: "custom",
		// 	renderCustom: (swiper, current, total) => {
		// 		return `${total + 2}`;
		// 	},
		// },
	});

	// текущий слайд и общее кол-во слайдов рядом со скроллом
	const swiperCurrentNumber = document.querySelector(".projects__scroll-current");
	const swiperCountNumber = document.querySelector(".projects__scroll-count");

	// считаем кол-во слайдов
	const countProjectsSlides = document.querySelectorAll(".projects__slide");
	let ProjectsSlidesLength = countProjectsSlides.length;

	// заносим кол-во слайдов в html код
	swiperCountNumber.innerText = `0${ProjectsSlidesLength}`;

	projectsSwiper.on("slideChange", () => {
		let index = projectsSwiper.realIndex + 1;

		// заносим текущий слайд в html код
		swiperCurrentNumber.innerText = `0${index}`;
	});
};
projectsSlider();

// const scrollCount = document.querySelector(".projects__scroll-count");
// scrollCount.classList.remove("swiper-pagination-custom");
// scrollCount.classList.remove("swiper-pagination-horizontal");
