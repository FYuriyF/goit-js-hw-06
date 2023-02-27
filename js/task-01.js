// Найти элемент ul#categories
const categoriesList = document.querySelector("#categories");
// Получичь все элементы li.item
const categoriesItems = categoriesList.querySelectorAll("li.item");

// Вывести количество категорий в консоль
console.log(`В списке ${categoriesItems.length} категории.`);

// Вывести текст заголовка элемента и количество элементов в категории
categoriesItems.forEach((category) => {
	const categoryName = category.querySelector("h2").textContent;
	const categoryItems = category.querySelectorAll("li").length;
	console.log(
		`Категория: ${categoryName} (количество элементов: ${categoryItems})`
	);
});
