window.onload = function () {
	"use strict";

	editorText.document.designMode = "On";

	var bold = document.querySelector("#bold"),
		italic = document.querySelector("#italic"),
		p = document.createElement("p"),
		title = document.createElement("h1"),
		header = document.querySelector("#header"),
		preview = document.querySelector("#preview"),
		result = document.querySelector("#result"),
		textEditor = document.querySelector("#editorText"),
		underline = document.querySelector("#underline");

	function execCmd (command) {
		editorText.document.execCommand(command, false, null);
	}

	bold.onclick = function () {
		execCmd("bold");
	}

	italic.onclick = function () {
		execCmd("italic");
	}

	underline.onclick = function () {
		execCmd("underline");
	}

	preview.onclick = function () {
		result.appendChild(title).innerHTML = header.value;
		result.appendChild(p).innerHTML = textEditor.contentWindow.document.body.innerHTML;
	}
}
