class UserRegistrationForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer:
                }

                .modal {
                    display: none;
                    position: fixed;
                    z-index: 10;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    justify-content: center;
                    align-items: center;
                }

                .modal-content {
                    background: white;
                    padding: 30px;
                    width: 400px;
                    position: relative;
                    border-radius: 8px;
                    text-align: left;
                }

                .close {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    font-size: 20px;
                    cursor: pointer;
                    color: #999;
                }

                .form-group {
                    margin-bottom: 15px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                }

                input, textarea, select {
                    widht: 100%;
                    padding: 8px;
                    box-sizing: border-box;
                }

                .error {
                    color: red;
                    font-size: 14px;
                    margin-top: 3px;
                    display: none;
                }

                .result {
                    margin-top: 20px;
                    background: #e0ffe0;
                    padding: 10px;
                    border: 1px solid green;
                    border-radius: 5px;
                    display: none;
                    max-width: 500px;
                    margin-inline: auto;
                }

                .form-group.inline {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }

                .form-group.inline label {
                    margin-bottom: 0;
                }
            
            </style>


            <button id="openModalBtn">Открыть форму</button>
            <div id="modal" class="modal">
                <div class="modal-content">
                    <span class="close" id="closeModalBtn">&times;</span>
                    <form id="registrationForm" novalidate>
                        <div class="form-group">
                            <label for="name">Имя:</label>
                            <input type="text" id="name" />
                            <div class="error" id="nameError"></div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" />
                            <div class="error" id="emailError"></div>
                        </div>
                        <div class="form-group">
                            <label for="age">Возраст:</label>
                            <input type="number" id="age" min="18" max="100" />
                            <div class="error" id="ageError"></div>
                        </div>
                        <div class="form-group">
                            <label>Пол:</label>
                            <div class="form-group inline">
                                <input type="radio" name="gender" id="male" value="женский">
                                <label for="male">Мужской</label>
                            </div>
                            <div class="form-group inline">
                                <input type="radio" name="gender" id="female" value="мужской">
                                <label for="female">Женский</label>
                            </div>
                            <div class="form-group inline">
                                <input type="radio" name="gender" id="other" value="другой">
                                <label for="other">Другое</label>
                            </div>
                            <div class="error" id="genderError"></div>
                        </div>
                        <div class="form-group">
                            <label for="city">Город:</label>
                            <select id="city">
                                <option value="">Выберите город</option>
                                <option value="Минск">Минск</option>
                                <option value="Москва">Москва</option>
                                <option value="Бостон">Бостон</option>
                            </select>
                            <div class="error" id="cityError"></div>
                        </div>
                        <div class="form-group inline">
                            <input type="checkbox" name="agreement" id="agreement">
                            <label for="agreement">Согласие с условиями</label>
                            <div class="error" id="agreementError"></div>
                        </div>
                        <div class="form-group">
                            <label id="message">О себе:</label>
                            <textarea type="text" id="message" row="4"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit">Зарегистрироваться</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="result" id="result"></div>


        `;
    }

    connectedCallback() {
        const $ = (id) => this.shadowRoot.getElementById(id);
        const closeButton = $('closeModalBtn');
        const openButton = $('openModalBtn');
        const modal = $('modal');
        const form = $('registrationForm');
        const result = $('result');

        openButton.addEventListener('click', () => {
            modal.style.display = 'flex';
            result.style.display = 'none';
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = $('name').value.trim();
            const email = $('email').value.trim();
            const age = $('age').value.trim();
            const gender = this.shadowRoot.querySelector('input[name="gender"]:checked');
            const city = $('city').value;
            const message = $('message').value;
            const agreement = $('agreement').checked;

            const errors = {
                nameError: !name ? 'Введите имя' : '',
                emailError: (!email || !email.includes('@') || !email.includes('.')) ? 'Введите корректный Email' : '',
                ageError: (!age || parseInt(age) < 18 || parseInt(age) > 100) ? 'Введите корректный возраст' : '',
                genderError: !gender ? 'Выберите пол' : '',
                cityError: !city ? 'Выберите город' : '',
                agreementError: !agreement ? 'Вы должны согласиться' : ''
            }

            let valid = true;

            for (const key in errors) {
                const element = $(key);

                if (errors[key]) {
                    element.textContent = errors[key];
                    element.style.display = 'block';
                    valid = false;
                } else {
                    element.textContent = '';
                    element.style.display = 'none';
                }
            }

            if (valid) {
                result.innerHTML = `
                    <h3>Вы ввели:</h3> 
                    <p><strong>Имя:</strong>${name}</p>   
                    <p><strong>Email:</strong>${email}</p> 
                    <p><strong>Возраст:</strong>${age}</p>
                    <p><strong>Пол:</strong>${gender.value}</p> 
                    <p><strong>Город:</strong>${city}</p>
                    <p><strong>Сообщение:</strong>${message || '(не указано)'}</p>
                `;
                result.style.display = 'block';
                form.reset();
                modal.style.display = 'none';
            }
        });
    }
}

customElements.define('user-registration-form', UserRegistrationForm);