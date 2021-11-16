let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

// const sectionServices = document.getElementById("services");
const sectionServices = document.querySelector(".services__title");
const houseTop = document.querySelector(".house__top");
const houseLeft = document.querySelector(".house__left");
const houseRight = document.querySelector(".house__right");

// function isPartiallyVisible(el) {
// 	let elementBoundary = el.getBoundingClientRect();

// 	let top = elementBoundary.top;
// 	let bottom = elementBoundary.bottom;
// 	let height = elementBoundary.height;

// 	return top + height >= 0 && height + window.innerHeight >= bottom;
// }

function isFullyVisible(el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;

	return top >= 0 && bottom <= window.innerHeight;
}

function scrolling(e) {
	// if (isPartiallyVisible(sectionServices)) {
	// setTimeout(() => {
	// 	houseTop.classList.add("active");
	// 	houseLeft.classList.add("active");
	// 	houseRight.classList.add("active");
	// }, 2000);
	// }

	if (isFullyVisible(sectionServices)) {
		// secondBox.classList.add("active");

		// document.body.classList.add("colorTwo");
		// document.body.classList.remove("colorOne");

		setTimeout(() => {
			houseTop.classList.add("active");
			houseLeft.classList.add("active");
			houseRight.classList.add("active");
		}, 1000);
	}

	// for (var i = 0; i < listItems.length; i++) {
	// 	var listItem = listItems[i];

	// 	if (isPartiallyVisible(listItem)) {
	// 		listItem.classList.add("active");
	// 	} else {
	// 		listItem.classList.remove("active");
	// 	}
	// }
}

// console.log("no");
function throttleScroll(e) {
	if (isScrolling == false) {
		window.requestAnimationFrame(() => {
			// console.log("scroll");
			scrolling(e);
			isScrolling = false;
		});
	}
	isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
