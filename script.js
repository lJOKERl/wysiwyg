"use strict";

function desMod() {
	editorText.document.designMode = "On";
}

var p = document.createElement("p"),
	title = document.createElement("h1"),
	header = document.querySelector("#header"),
	result = document.querySelector("#result"),
	textEditor = document.querySelector("#editorText");

function execCmd (command) {
	editorText.document.execCommand(command, false, null);
}

function getResult () {
	if (header.value) {
		result.appendChild(title).innerHTML = header.value;
	} else {
		result.appendChild(title).innerHTML = "Заголовок"
	}
	result.appendChild(p).innerHTML = textEditor.contentWindow.document.body.innerHTML;
}

function execCmdWithArg (command, arg) {
	editorText.document.execCommand(command, false, arg);
}
