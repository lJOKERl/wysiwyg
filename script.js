window.onload = function () {
	"use strict";

	document.querySelector("button").onclick = function() {
	    var selection = window.getSelection();
	    document.getElementById("result").innerHTML = selection;
	}
}
