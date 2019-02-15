// expand / collapse agenda rows
(function ($) {
	"use strict";

	// expand/collapse the clicked element
	// when click "Expand+" link, expand the text
	// when click "Collapse+" link, collapse the text
	function handleExpandCollapseClick (event) {

		const button = event.currentTarget;
		const element = button.parentNode;
		const isExpanded = element.classList.contains("expandedHeight");
		if (isExpanded) {

			element.classList.add("collapsedHeight");
			element.classList.remove("expandedHeight");
			setTimeout(() => button.innerText = "Expand +", 200);

		} else {

			element.classList.remove("collapsedHeight");
			element.classList.add("expandedHeight");
			setTimeout(() => button.innerText = "Collapse –", 200);

		}

	}

	function setUpExpandCollapseLinks() {
		const elements = Array.from(document.querySelectorAll(".abstract.expandable"));

		elements.forEach(function (element) {

			if (element.querySelector("button") === null) {

				if (element.offsetHeight > 134) {
					// create Expand+, Collapse- button
					let button = document.createElement("button");
					button.innerText = "Expand +";
					button.addEventListener("click", handleExpandCollapseClick);
					element.appendChild(button);

					// collapse text
					element.classList.add("collapsedHeight");

				}
			}
		});
	}

	setUpExpandCollapseLinks();

}(window.jQuery));

/**
 * expand / collapse long passages of text
 */
(function ($) {
	"use strict";

	$(".bio-wrapper.expandable").on("click", function(event){
		if ($(event.currentTarget).hasClass("expanded")) {
			$(event.currentTarget).removeClass("expanded");
		} else {
			$(event.currentTarget).addClass("expanded");
		}
	});

	// when click bio link, expand person's bio
	$(".bio-link").on("click", function (event) {
		var speaker = $(event.currentTarget).attr("data-speaker");
		var $bioWrapper = $("#"+speaker + " .bio-wrapper");
		if ($bioWrapper.hasClass("expanded") === false) {
			$bioWrapper.click();
		}
	});

}(window.jQuery));
