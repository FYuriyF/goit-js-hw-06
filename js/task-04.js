const decrBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");
const incrBtn = document.querySelector('button[data-action="increment"]');

let counter = 0;

decrBtn.addEventListener("click", () => {
	counter -= 1;
	counterValue.textContent = counter;
});

incrBtn.addEventListener("click", () => {
	counter += 1;
	counterValue.textContent = counter;
});
