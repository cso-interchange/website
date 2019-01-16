(function ($, MktoForms2) {

	"use strict";

	if (MktoForms2) {
		MktoForms2.loadForm("//app-sj08.marketo.com", "797-ENI-742", 2738);

		MktoForms2.whenReady(function (form) {

			// cleanup HTML and CSS from Marketo
			// remove Marketo CSS
			$("link[rel=\"stylesheet\"]").each(function (index, item) {

				if ($(item).attr("href").match(/(lps\.qualys|\.marketo)\.com\/.*\.css$/)) {

					$(item).remove();

				}

			});

			// remove style tag inside Marketo forms
			let $form = form.getFormElem();
			$form.find("style").remove();

			// remove inline style from Marketo elements
			$form.find("*").addBack().each(function (index, item) {

				$(item).attr("style", null);

			});

			// add unique class to each form row container
			$(".mktoField").each(function (index, item) {
				var name = $(item).attr("name");
				$(item).parents(".mktoFormRow").addClass(name);
			});

			// preselect location based on hash value
			if (window.location.hash) {
				var location = 	window.location.hash.replace("#", "").replace("/", "");
				$("option[value='" + location + "']").prop('selected', true);
			}

		});
	}

}(window.jQuery, window.MktoForms2));
