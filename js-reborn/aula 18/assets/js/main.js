function relogio(){
  let seconds = 0;
  let timer;
  const timerElement = document.querySelector('.timer');
  
  document.addEventListener('click', (ev) => {
    const classes = ev.target.classList;
  
    if (classes.contains('init')) {
      timerElement.classList.remove('pausado');
      timer = setInterval(() => {
        seconds++;
        createWindowTimerElement(seconds);
      }, 1000)
    }
  
    if (classes.contains('pause')) {
      timerElement.classList.add('pausado');
      clearTimeout(timer)
    }
  
    if (classes.contains('zero')) {
      timerElement.classList.remove('pausado');
      clearTimeout(timer)
      seconds = 0;
      timerElement.innerHTML = '00:00:00';
    }
  });
  
  function createWindowTimerElement(seconds) {
    const date = new Date(seconds * 1000);
    timerElement.innerHTML = date.toLocaleTimeString('pt-BR', {
      hour12: false,
      minute: '2-digit',
      hour: '2-digit',
      second: '2-digit',
      timeZone: 'UTC'
    });
  }
}

relogio();