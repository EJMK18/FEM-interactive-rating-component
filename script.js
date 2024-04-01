"use strict";

// DOM ELEMENTS
const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit-button");
const ratingSubmitted = document.querySelector(".rating-submitted");
const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thank-you-section");

// FUNCTIONS
const notSelected = function (arr) {
	arr.forEach(function (el) {
		if (el.getAttribute("aria-checked") === "true") {
			el.setAttribute("aria-checked", "false");
			el.style.background = "var(--neutral-medium-gray-opacity)";
			el.style.color = "var(--neutral-light-gray)";
		}
	});
};

// EVENT LISTENERS
ratingButtons.forEach((el) =>
	el.addEventListener("click", function () {
		notSelected(ratingButtons);

		el.setAttribute("aria-checked", "true");
		if (el.getAttribute("aria-checked", "true") === "true") {
			el.style.color = "var(--neutral-white";
			el.style.background = "var(--neutral-light-gray";
		}
	})
);

submitButton.addEventListener("click", function () {
	ratingButtons.forEach(function (el) {
		if (el.getAttribute("aria-checked") === "true") {
			ratingSubmitted.textContent = el.textContent.trim();
			ratingSection.classList.add("hide");
			thankYouSection.classList.remove("hide");
		}
	});
});
