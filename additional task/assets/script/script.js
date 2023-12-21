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

const selectMakes = form.elements.makesOfCar;
const selectModels = form.elements.modelsOfCar;
const conditionOfCar = form.elements.conditionOfCar;
const typeOfFuel = form.elements.typeOfFuel;
const engineCapacity = form.elements.engineCapacity;
const carOwners = form.elements.carOwners;
const mileage = form.elements.mileage;
const classNameUsed = document.querySelector(".used");
const total = document.querySelector(".total");
const paymentMethodText = document.querySelector(".paymentMethodText");
const reset = document.querySelector(".reset");
const errorEngineCapacity = document.getElementById('errorEngineCapacity');
const errorMileage = document.getElementById('errorMileage');


const makesOfCar = ["Mazda", "Lada", "BMW", "Mercedes", "Audi"];


const modelsOfMazda = ["CX-4", "CX-5", "MX-30", "3", "5"];
const pricesOfMazda = [40000, 50000, 35000, 20000, 45000];
const modelsOfLada = ["XRay","Vesta", "Granta", "Niva", "Largus"];
const pricesOfLada = [25000, 25000, 20000, 18000, 15000];
const modelsOfBMW = ["i7", "iX1", "XM", "iX", "iX3"]; 
const pricesOfBMW = [55000, 35000, 30000, 30000, 50000];
const modelsOfMercedes = ["EQS SUV", "CLE", "EQE", "CLS", "E-CLASS"];
const pricesOfMercedes = [50000, 45000, 35000, 40000, 45000];
const modelsOfAudi = ["Q6", "Q5 e-TRON", "A8", "Q8 e-TRON SPORTBACK", "Q5"];
const pricesOfAudi = [55000, 45000, 40000, 55000, 35000];

const modelsOfCar = [modelsOfMazda, modelsOfLada, modelsOfBMW, modelsOfMercedes, modelsOfAudi];
const pricesOfCar = [pricesOfMazda, pricesOfLada, pricesOfBMW, pricesOfMercedes, pricesOfAudi];

function validateEngineCapacity(engineCapacity) {
    const regex = /^[1-3]\.?[0-9]?/gm;
    return regex.test(engineCapacity);
};


function removeElementsByClass(elementsClassName){
    const elements = document.getElementsByClassName(elementsClassName);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};


function addOptions(select, array, className) {
for (let index = 0; index < array.length; index++) {
	select.innerHTML += `<option ${className} value="${index}">${array[index]}</option>`;
}
};

addOptions(selectMakes, makesOfCar);


selectMakes.addEventListener("change", function(value){
	const classNameModel = "class = 'model'";
	removeElementsByClass('model');

	let index = selectMakes.value;
	addOptions(selectModels, modelsOfCar[index], classNameModel);
});


conditionOfCar[1].addEventListener("change", function(evt){
if (evt.target.value === "used") {
	classNameUsed.classList.remove("used");
	conditionOfCar[0].disabled = true;
}
});

conditionOfCar[0].addEventListener("change", function(evt){
	if (evt.target.value === "new") {
		classNameUsed.classList.add("used");
		conditionOfCar[1].disabled = true;
	}
});


let engineCapacityValue;
let priceOfCar;
let pricesListOfCar;



form.addEventListener("change", function calculatePrice(event) {
	errorEngineCapacity.style.display = 'none';
	errorMileage.style.display = 'none';

if (event.target.name === "makesOfCar") {
    let makeIndex = event.target.value;
    pricesListOfCar = pricesOfCar[makeIndex];
	priceOfCar = '';
};

if (event.target.name === "modelsOfCar") {
    let modelIndex = event.target.value;
	priceOfCar = pricesListOfCar[modelIndex];
};

if (event.target.name === "typeOfFuel" ) {
	if (event.target.checked === true) { priceOfCar += parseFloat(event.target.value); 
		// console.log(priceOfCar);
	} else if (event.target.checked === false) {priceOfCar -= parseFloat(event.target.value);
		// console.log(priceOfCar);
		}
	}

if (event.target.name === "engineCapacity") {
    // console.log(`Engine Capacity, L: ${event.target.value}`);
	if (event.target.value !== ''){
	engineCapacityValue = event.target.value;
		if (validateEngineCapacity(form.elements.engineCapacity.value) === false) {
		errorEngineCapacity.textContent = "Enter the correct your car's engine capacity (from 1 to 3). Please use a dot to separate decimal numbers.";
		errorEngineCapacity.style.display = 'block';
		};
	
	priceOfCar += parseFloat(engineCapacityValue * 100);
	// console.log(priceOfCar);
    engineCapacity.disabled = true;
	}
};


if (event.target.name === "conditionOfCar") {
    // console.log(`Condition of your Car: ${event.target.value}`);
	// console.log(form.elements.engineCapacity.value);
	if (form.elements.engineCapacity.value === "1.6")
	{priceOfCar += 16*100}
	if (event.target.value === 'used'){
		engineCapacity.disabled = true;
	}
}

if (event.target.name === "carOwners") {
	// console.log(`The number of car owners: ${event.target.value}`);
	// console.log(event.target.checked);
	if (event.target.checked === true) { priceOfCar -= parseFloat(event.target.value); 
		// console.log(priceOfCar);
		carOwners[0].disabled = true;
		carOwners[1].disabled = true;
	} else if (event.target.checked === false) {priceOfCar += parseFloat(event.target.value);
		// console.log(priceOfCar);
		carOwners[0].disabled = true;
		carOwners[1].disabled = true;
	}
}

if (event.target.name === "carOwners") {
	// console.log(`The number of car owners: ${event.target.value}`);
	// console.log(event.target.checked);
	if (event.target.checked === true) { priceOfCar -= parseFloat(event.target.value); 
		// console.log(priceOfCar);
		carOwners[0].disabled = true;
	} else if (event.target.checked === false) {priceOfCar += parseFloat(event.target.value);
		// console.log(priceOfCar);
		carOwners[0].disabled = true;
	}
};


if (event.target.name === "mileage") {
	if (event.target.value >= 0 && event.target.value <= 150000) {
		priceOfCar = priceOfCar - event.target.value*0.1;
		mileage.disabled = true;
	} else { 
		errorMileage.textContent = "Enter the correct mileage (from 0 to 150000).";
		errorMileage.style.display = 'block';
		mileage.disabled = true;
	}
	
};

if (event.target.name === "paymentMethod") {
    // console.log(`Payment Method: ${event.target.value}`);
	if (event.target.value === "payByCard")
	{paymentMethodText.textContent = `The payment method you have chosen is payment by card`
} else if (event.target.value === "payInCash")
{paymentMethodText.textContent = `The payment method you have chosen is payment in cash`
} else if (event.target.value === "invoice")
{paymentMethodText.textContent = `The payment method you have chosen is invoice for a legal person`}
};

total.textContent = `Your car rate is about ${priceOfCar.toLocaleString('en-US')}\$`

});


reset.addEventListener ("click", function(){
	form.reset();
} )
