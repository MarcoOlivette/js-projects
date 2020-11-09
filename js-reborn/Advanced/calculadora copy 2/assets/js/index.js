function criaCalculadora() {
    let inputElement = document.querySelector('.input');

    const constructor = () => {
        click();
        press();
    }

    const press = () => {
        document.addEventListener('keypress', (ev) => {
            if (ev.key === 'Enter') {
                this.calculate();
            }
        });
    }

    const click = () => {    
        document.addEventListener('click', (ev) => {
            const el = ev.target;
            if (el.classList.contains('btn-num')
                || el.classList.contains('btn-multiply')
                || el.classList.contains('btn-plus')
                || el.classList.contains('btn-point')
                || el.classList.contains('btn-minus')
                || el.classList.contains('btn-division')
                || el.classList.contains('btn-open-parentheses')
                || el.classList.contains('btn-close-parentheses')) {
                displayValues(el.innerText);
            }

            if(el.classList.contains('btn-shift')){
                shiftDisplayValue();
            }

            if(el.classList.contains('btn-clean')){
                cleanDisplay();
            }

            if (el.classList.contains('btn-enter')){
                calculate();
            }
        });
    }

    const displayValues = (value) => {
        inputElement.value += value;
    }

    const shiftDisplayValue = () => {
        inputElement.value = inputElement.value.slice(0,-1);
    }

    const cleanDisplay = () => {
        inputElement.value = '';
    }

    const calculate = () => {
        try{
            inputElement.value = eval(inputElement.value);
        }catch(e){
            alert('Erro no seu Calculo');
        }
    }

    return constructor();
}

criaCalculadora();
