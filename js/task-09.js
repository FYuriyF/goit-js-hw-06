const widget = document.querySelector(".widget");
const colorSpan = widget.querySelector(".color");
const changeColorBtn = widget.querySelector(".change-color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function changeBackgroundColor() {
	const newColor = getRandomHexColor();
	document.body.style.backgroundColor = newColor;
	colorSpan.textContent = newColor;
}

changeColorBtn.addEventListener("click", changeBackgroundColor);
