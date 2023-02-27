const inputEl = document.querySelector("#validation-input");

function onInputBlur() {
	const needLength = Number(inputEl.data - length);
	const existingLength = inputEl.value.length;
	if (existingLength === needLength) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	} else {
		inputEl.classList.add("invalid");
		inputEl.classList.remove("valid");
	}
}

inputEl.addEventListener("blur", onInputBlur);
