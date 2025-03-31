// Поле для выбора файлов должно принимать только картинки размером до 1 Мб, и реагировать не только на выбор картинки при клике на область инпута, но и на перетаскивание файлов (драг и дроп).

const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
    // Проверка на максимальный размер 1 мегабайт
    if(event.target.files[0].size > 1024000) {
       alert("Этот файл слишком большой!");
       this.value = "";
    }
})