// Создайте форму, которая принимает поля “Телефон”, “Email”, “Дата рождения”(через input type="date"), “Пароль”, “ФИО”. Поставьте валидацию на каждое из полей с помощью регулярных выражений
// Требования к паролю - минимум 8 символов, хотя бы одна заглавная буква, одна цифра и один специальный символ.
// Требования к номеру телефона - от 3 до 15 цифр, возможность префикса +, но не -.
// Требования к email - использовать email pattern, так чтобы проходила валидация abc@abc.abc 

const form = document.getElementById('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
        fio: document.getElementById('fio').value,
        birthday: document.getElementById('birthday').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value,
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    const phoneRegex = /^\+?\d{3,15}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    for (let key in formData) {
        document.getElementById(`${key}Error`).classList.remove('active');
    }

    for (let key in formData) {
        let value = formData[key];
        console.log(key, value);
        if (value === '') {
            document.getElementById(`${key}Error`).classList.add('active');
            return;
        }

        if (key === 'password' && !passwordRegex.test(value)) {
            document.getElementById(`${key}Error`).classList.add('active');
            return;
        }

        if (key === 'phone' && !phoneRegex.test(value)) {
            document.getElementById(`${key}Error`).classList.add('active');
            return;
        }

        if (key === 'email' && !emailRegex.test(value)) {
            document.getElementById(`${key}Error`).classList.add('active');
            return;
        }
    }


    form.style.display = 'none';
    document.querySelector('.form-success').classList.add('active');


})