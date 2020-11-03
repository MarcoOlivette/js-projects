var seconds = 0;
let timer;

function main() {
    const initButton = document.querySelector('.init');
    const pauseButton = document.querySelector('.pause');
    const zeroButton = document.querySelector('.zero');

    initButton.addEventListener('click', () => {
        buttonEvent(initButton);
        buttonNoEvent(pauseButton, zeroButton);
        initTimer()
    });
    pauseButton.addEventListener('click', () => {
        buttonEvent(pauseButton);
        buttonNoEvent(initButton, zeroButton);
        pauseTimer(pauseButton);
    });
    zeroButton.addEventListener('click', () => {
        buttonEvent(zeroButton);
        buttonNoEvent(initButton, pauseButton);
        zeroTimer();
    });
};

function buttonEvent(button){
    button.style.padding = "15px 20px 15px 20px";
}

function buttonNoEvent(button1, button2){
    button1.style.padding = "10px 15px 10px 15px";
    button2.style.padding = "10px 15px 10px 15px";
}

function initTimer() {
    timer = setInterval(() => {
        seconds++;
        createWindowTimerElement(seconds);
    }, 1000)
}

function createWindowTimerElement(seconds) {
    const timerElement = document.querySelector('.timer');
    const date = new Date(seconds * 1000);
    timerElement.innerHTML = date.toLocaleTimeString('pt-BR', {
        hour12: false,
        minute: '2-digit',
        hour: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    })

}

function pauseTimer() {
    const timerElement = document.querySelector('.timer');
    timerElement.style.color = "red";
    clearTimeout(timer)
}

function zeroTimer() {
    clearTimeout(timer)
    seconds = 0;
    const timerElement = document.querySelector('.timer');
    timerElement.innerHTML = '00:00:00';
}
main();