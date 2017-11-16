window.onload = function () {
	"use strict";

	document.ondragstart = prohibit;

	// Запрет на перетаскивание текста в области
	function prohibit() {
			return false; 
		}

	document.querySelector("#preview").onclick = function() {
		var p = document.createElement("p");
	    var text = window.getSelection();
		document.getElementById("result").appendChild(p).innerHTML = text;
	}
}
