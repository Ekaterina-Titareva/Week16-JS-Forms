// 2. **Задание: Форма регистрации с валидацией всех полей**
    
//     1 Создайте HTML-страницу с формой для регистрации пользователя, содержащую следующие поля:
    
//     - Поле ввода имени: обязательное поле, должно содержать только буквы и пробелы. Длина имени должна быть от 2 до 20 символов. Должно иметь атрибуты `placeholder` и `required`.
//     - Поле ввода электронной почты: обязательное поле, должно быть в формате `email` (содержать символ '@' и доменное имя). Должно иметь атрибуты `placeholder` и `required`.
//     - Поле ввода возраста: обязательное поле. Должно иметь атрибуты `placeholder` и `required`.
//     - Поле выбора пола: представленное в виде `radio buttons` для выбора между мужчиной и женщиной
//     - Поле выбора профессии: обязательное поле, представленное в виде выпадающего списка (`select`). Должно иметь атрибуты `required` и `placeholder` для выбора профессии. Варианты профессий: Врач, Программист, Учитель, Дизайнер, Инженер, Продавец, Другое.
//     - Поле ввода пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Должно иметь атрибуты `placeholder`, `required`, `minlength` и `pattern`.
//     - Поле `checkbox`, показывающее согласие пользователя с обработкой данных. Должно иметь атрибут `required`.
//     - Кнопка отправки формы
    
//     2 Добавьте стили для формы
    
//     3 Используя JavaScript, добавьте обработчик события отправки формы (`submit`), который будет выполнять следующие действия:
    
//     - Отменять действие по умолчанию для события `submit`
//     - Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
//     - Кнопка отправки должна быть неактивна (`disabled`), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
//     - Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму
    
//     4 Бонусное задание: реализуйте дополнительные обработчики событий `focus` и `blur` для каждого поля

	const form = document.forms[0];
    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorAge = document.getElementById('errorAge');
    const errorGender = document.getElementById('errorGender');
    const errorPassword = document.getElementById('errorPassword');
    const errorOccupation = document.getElementById('errorOccupation');
    const agreementCheckbox = document.forms[0].elements.agreement;
    const errorAgreement = document.getElementById('errorAgreement');


form.addEventListener('submit', function(evt) {
let hasError = false;

// Очистка предыдущих сообщений об ошибках
errorName.style.display = 'none';
errorEmail.style.display = 'none';
errorAge.style.display = 'none';
errorGender.style.display = 'none';
errorPassword.style.display = 'none';
errorOccupation.style.display = 'none';

function validateName(name) {
    const regex = /^[^\s][a-zA-Z\s]{2,20}$/gm;
    return regex.test(name);
};

if (validateName(form.elements.name.value) === false) {
    errorName.textContent = 'Enter the correct user name';
    errorName.style.display = 'block';
    hasError = true;
};

function validateEmail(email) {
    const regex = /^[^\s][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/gm;
    return regex.test(email);
}

if (validateEmail(form.elements.email.value) === false) {
    errorEmail.textContent = 'Enter the correct user email';
    errorEmail.style.display = 'block';
    hasError = true;
};

function validateAge(age) {
    const regex = /^[0-9]{1,3}$/gm;
    return regex.test(age);
}

if (validateAge(form.elements.age.value) === false || validateAge(form.elements.age.value) > 122) {
    errorAge.textContent = 'Enter the correct user age';
    errorAge.style.display = 'block';
    hasError = true;
};

if (form.elements.gender.value !== "male" && form.elements.gender.value !== "female" ) {
    errorGender.textContent = 'Choose your gender';
    errorGender.style.display = 'block';
    hasError = true;
};

if (form.elements.occupation.value === '') {
    errorOccupation.textContent = 'Choose your occupation';
    errorOccupation.style.display = 'block';
    hasError = true;
};

function validatePassword(password) {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/gm;
    return regex.test(password);
}

if (validatePassword(form.elements.password.value) === false) {
    errorPassword.textContent = 'Enter the correct password';
    errorPassword.style.display = 'block';
    hasError = true;
};

if (hasError !== false) {
    evt.preventDefault();
} else {
    console.log(form.elements.name.value)
    console.log(form.elements.email.value)
    console.log(form.elements.age.value)
    console.log(form.elements.gender.value)
    console.log(form.elements.occupation.value)
    console.log(form.elements.password.value)
    console.log("I agree")
    alert('Данные появляются в консоли, пока не нажмешь кнопку ОК в alert, почему так происходит?') //The form has been submitted successfully
};
form.reset();
});

agreementCheckbox.addEventListener('change', function() {
    if (agreementCheckbox.checked === true) {
        document.forms[0].elements.submitBtn.disabled = false;
        errorAgreement.style.display = 'none'
    } else {
        document.forms[0].elements.submitBtn.disabled = true;
        errorAgreement.textContent = 'Confirm your agreement to the Terms and Privacy Policy';
        errorAgreement.style.display = 'block'
    }
});