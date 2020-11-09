/**
 * if (el.classList.contains('btn-num')
                || el.classList.contains('btn-multiply')
                || el.classList.contains('btn-plus')
                || el.classList.contains('btn-point')
                || el.classList.contains('btn-minus')
                || el.classList.contains('btn-division')
                || el.classList.contains('btn-open-parentheses')
                || el.classList.contains('btn-close-parentheses')) {
                displayValues(el.innerText);
            }
 */

function criaCalculadora() {
    return {
        inputElement: document.querySelector('.input'),

        constructor() {
            this.click();
            this.press();
        },

        click() {
            addEventListener('click', function (ev) {
                const el = ev.target;

                if (el.classList.contains('btn-num')
                    || el.classList.contains('btn-multiply')
                    || el.classList.contains('btn-plus')
                    || el.classList.contains('btn-point')
                    || el.classList.contains('btn-minus')
                    || el.classList.contains('btn-division')
                    || el.classList.contains('btn-open-parentheses')
                    || el.classList.contains('btn-close-parentheses')) {
                    this.displayValues(el.innerText);
                }

                if (el.classList.contains('btn-clean')) {
                    this.cleanDisplay();
                }

                if (el.classList.contains('btn-enter')) {
                    this.calculate();
                }

                if (el.classList.contains('btn-shift')) {
                    this.shiftDisplay();
                }
            }.bind(this))
        },

        press() {
            addEventListener('keypress', (ev) => {
                console.log(ev);   
            })
        },

        displayValues(value) {
            this.inputElement.value += value;
        },

        calculate() {
            try {
                this.inputElement.value = eval(this.inputElement.value);
            } catch (e) {
                alert('Valores incorretos');
            }
        },

        cleanDisplay() {
            this.inputElement.value = '';
        },

        shiftDisplay() {
            this.inputElement.value = this.inputElement.value.slice(0, -1);
        }
    }
}

const calculadora = criaCalculadora();
calculadora.constructor();