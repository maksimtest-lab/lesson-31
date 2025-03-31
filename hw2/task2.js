const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
    // Проверка на максимальный размер 1 мегабайт
    if(event.target.files[0].size > 1024000) {
       alert("Этот файл слишком большой!");
       this.value = "";
    }
})