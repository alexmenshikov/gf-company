const swiper = new Swiper(".swiper", {
	loop: true,
	speed: 1500,

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

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

	// if (window.addEventListener) {
	// 	let once = false;
	// 	window.addEventListener("touchstart", function () {
	// 		if (!once) {
	// 			once = true;
	// 			plus.forEach((item) => {
	// 				item.addEventListener("click", () => {
	// 					let plusInfo = item.querySelectorAll(".tabs__content-hover");

	// 					plusInfo.classList.add("active");
	// 				});
	// 			});
	// 		}
	// 	});
	// }
};

technologiesAction();
