const date = new Date();

function formatNumbers(number) {

    return String(number).padStart(2, '0');
}

function updateClock() {
    const now = new Date();
    const hours = formatNumbers(now.getHours());
    const minutes = formatNumbers(now.getMinutes());
    const seconds = formatNumbers(now.getSeconds());

    const timeString = `${hours}:${minutes}:${seconds}`;

    const clockDiv = document.getElementById('clock');

    clockDiv.textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);