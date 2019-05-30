// if on http, redirect to https
(function () {
	"use strict";
	if (window.location.protocol === "http:") {
		window.location.href = window.location.href.replace("http://", "https://");
	}
}());