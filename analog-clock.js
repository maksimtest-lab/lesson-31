
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const secondsDeg = seconds * 6 + minutes * 0.1
    const minutesDeg = minutes * 6 + seconds * 0.1;
    const hoursDeg = ((hours % 12) * 30) + minutes * 0.5;

    document.querySelector('#second-hand').style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
    document.querySelector('#minute-hand').style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    document.querySelector('#hour-hand').style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}

updateClock();

setInterval(updateClock, 1000);