const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

// Создать переменную ingredientsList, которая ссылается на список.

const ingredientsList = document.querySelector("#ingredients");

//  Создать масив элементов

const elements = ingredients.map((ingredient) => {
	// Создать отдельный элемент <li>.
	const li = document.createElement("li");
	// Добавить название ингредиента как его текстовое содержимое.
	li.textContent = ingredient;
	// Добавить элементу класс item.
	li.classList.add("item");
	return li;
});

// Вставить все <li> за одну операцию в список ul#ingredients.
ingredientsList.append(...elements);
