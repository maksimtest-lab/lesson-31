// Напишите функцию <em>fileToBase64</em>, которая будет принимать в себя один File из инпута для ввода файлов и превращать его в строку кодировки base64.

const fileInput = document.getElementById('fileInput');

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    const base64 = await fileToBase64(file);

    const container = document.getElementById('container');
    const img = document.createElement('img');
    img.src = base64;
    container.appendChild(img);
})