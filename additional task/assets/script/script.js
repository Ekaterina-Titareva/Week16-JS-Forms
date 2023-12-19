// ** Задание под звездочкой (тренировка регулярных выражений)**

// **Калькулятор расчёта стоимости автомобиля в зависимости от комплектации**

// 1. Создайте HTML-страницу с калькулятором для расчета стоимости автомобиля в зависимости от выбранных параметров. Калькулятор должен содержать следующие элементы:
//     - Выпадающий список (`select`) с маркой автомобиля: Reno, Opel, Mazda, Jaguar
//     - Выпадающий список (`select`) с моделью автомобиля, зависящей от выбранной марки
//     - Чекбокс или радиокнопка для выбора типа топлива: бензин, дизель, газ, электричество
//     - Поле ввода (`input`) для ввода объема двигателя (от 1.1 литра до 3.5 литров)
//     - Чекбокс или радиокнопка для выбора состояния автомобиля: новый, подержанный
//     - Если автомобиль подержанный, появляется чекбокс или радиокнопка для выбора количества владельцев: 1-2 владельца, более 3-х владельцев
//     - Чекбокс или радиокнопка для выбора способа оплаты: картой, наличными, счет на юридическое лицо
//     - Дополнительные поля по вашему желанию
// 2. Используя JavaScript, добавьте обработчик события изменения (`change`) для каждого элемента калькулятора:
//     - Создайте функцию `calculatePrice()`, которая будет вызываться при изменении любого элемента калькулятора
//     - В функции `calculatePrice()`, получите значения выбранных элементов (марка, модель, тип топлива, объем двигателя, состояние автомобиля, количество владельцев, способ оплаты)
//     - Используя полученные значения, расчетом определите стоимость автомобиля в зависимости от выбранных параметров
//     - Обновите отображение стоимости на странице
// 3. Улучшите калькулятор, добавив следующие функциональности:
//     - Динамическое обновление списка моделей автомобилей в зависимости от выбранной марки
//     - Установка предустановленных значений для некоторых элементов калькулятора
//     - Обработка ошибок и отображение соответствующих сообщений при некорректном вводе данных
//     - Анимация или изменение стиля элементов калькулятора при выборе определенных параметров
//     - Возможность сброса значений и стоимости автомобиля к исходным значениям
//     4. Добавьте стили к калькулятору, чтобы он выглядел привлекательно и был легко использовать
    
//     Успешное выполнение задания предполагает правильный расчёт стоимости автомобиля в зависимости от выбранных параметров, обработку ошибок, динамическое обновление списка моделей и привлекательный дизайн калькулятора.
const form = document.forms[0];
const nullOptionSelectMakes = form.elements.makesOfCar[0];
console.log(nullOptionSelectMakes);
const selectMakes = document.getElementById('makesOfCar');
const selectModels = document.getElementById('modelsOfCar');
const addOption = document.createElement("option");

console.log(selectMakes);
console.log(selectModels);
console.log(addOption);

let makesOfCar = ["Mazda", "Lada", "BMW", "Mercedes", "Audi"];

let modelsOfMazda = ["CX-4", "CX-5", "MX-30", "3", "5"];
let modelsOfLada = ["XRay","Vesta", "Granta", "Niva", "Largus"];
let modelsOfBMW = ["i7", "iX1", "XM", "iX", "iX3"]; 
let modelsOfMercedes = ["EQS SUV", "CLE", "EQE", "CLS", "E-CLASS"];
let modelsOfAudi = ["Q6", "Q5 e-TRON", "A8", "Q8 e-TRON SPORTBACK", "Q5"];

let modelsOfCar = [modelsOfMazda, modelsOfLada, modelsOfBMW, modelsOfMercedes, modelsOfAudi];

console.log(makesOfCar);
console.log(modelsOfCar);

function addOptions(select, array, className) {
for (let index = 0; index < array.length; index++) {
	select.innerHTML += `<option ${className} value="${index}">${array[index]}</option>`;
}
}

addOptions(selectMakes, makesOfCar);

selectMakes.addEventListener("change", function(value){
	
function removeElementsByClass(elementsClassName){
    const elements = document.getElementsByClassName(elementsClassName);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
	removeElementsByClass('model');

	const classNameModel = "class = 'model'";

	let index = selectMakes.value;

	addOptions(selectModels, modelsOfCar[index], classNameModel);

	let models = document.getElementsByClassName('model');

}
)


/* <label for="carOwners" class="form__label">The number of car owners:</label>
<input type="radio" id="oneTwoOwners" name="carOwners" value="oneTwoOwners" required>
<label for="oneTwoOwners" class="owners">1-2 car owners</label>
<input type="radio" id="threeMoreOwners" name="carOwners" value="threeMoreOwners">
<label for="threeMoreOwners" class="owners">3 and more owners</label> */
