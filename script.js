"use strict";

function desMod() {
	editorText.document.designMode = "On";
}

var bold = document.querySelector("#bold"),
	italic = document.querySelector("#italic"),
	p = document.createElement("p"),
	title = document.createElement("h1"),
	header = document.querySelector("#header"),
	body = document.getElementsByTagName('body'),
	result = document.querySelector("#result"),
	textEditor = document.querySelector("#editorText"),
	underline = document.querySelector("#underline");

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
	if (arg !== 0) {
		editorText.document.execCommand(command, false, arg);
		console.log(1)
	} else {
		return
	}
}

var textMod = true;
var editMode = false;

function toggleCode() {
	if (textMod) {
		textEditor.
	}
}