const form = document.getElementById("login-form");
const result = document.getElementById("result");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // event.stopPropagation;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    let valid = true;

    if(!name) {
        nameError.textContent = 'Введите имя';
        nameError.style.display = 'block';
        valid = false;
    }

    if(!email || !email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'Введите корректный email';
        emailError.style.display = 'block';
        valid = false;
    }

    if(!message) {
        messageError.textContent = 'Введите сообщение';
        messageError.style.display = 'block';
        valid = false;
    }

    if(valid) {
        result.style.display = 'block';
        result.innerHTML = `
            <strong>Имя:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Сообщение:</strong> ${message}
        `;
        form.reset();
    } else {
        result.style.display = 'none';
    }

    return false;
})