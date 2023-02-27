const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const email = form.elements.email.value;
	const password = form.elements.password.value;

	if (!email || !password) {
		alert("Все поля должны быть заполнены");
		return;
	}

	const userData = { email, password };
	console.log(userData);

	form.reset();
}
