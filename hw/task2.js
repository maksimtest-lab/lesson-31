// Зарегистрируйте кастомный компонент через Web Components.

customElements.define('my-component', class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 'Hello, world!';
    }
});

