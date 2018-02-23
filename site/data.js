/**
 * site wide data made available to all Handlerbars templates with {{site}}
 */
let envIsProd = process.env.TRAVIS_BRANCH === "master" || process.env.GIT_BRANCH === "master" || false;

module.exports = {
	base: {
		url: "https://www.cio-cisointerchange.org/"
	},
	env: {
		production: envIsProd
	},
	lang: "en",
	title: "CIO/CISO Interchange",
	year: (new Date()).getFullYear()
};
