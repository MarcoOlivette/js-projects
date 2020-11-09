// btn-clean
// btn-open-parentheses
// btn-close-parentheses
// btn-division
// btn-7
// btn-8
// btn-9
// btn-multiply
// btn-4
// btn-5
// btn-6
// btn-plus
// btn-1
// btn-2
// btn-3
// btn-minus
// btn-point
// btn-0
// btn-shift
// btn-enter

function criaCalculadora(){
    return{
        inputElement : document.querySelector('.input'),
        constructor() {
            this.cliqueBotoes();
            this.apertaEnter();
        },

        cliqueBotoes(){
            document.addEventListener('click' , (ev) => {
                const el = ev.target;

                if(el.classList.contains('btn-num') 
                || el.classList.contains('btn-division')
                || el.classList.contains('btn-multiply')
                || el.classList.contains('btn-plus')
                || el.classList.contains('btn-point')
                || el.classList.contains('btn-open-parentheses')
                || el.classList.contains('btn-close-parentheses')){
                    console.log()
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clean')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-shift')){
                    this.shiftDisplay();
                }

                if(el.classList.contains('btn-enter')){
                    this.calculate();
                }
            })
        },

        apertaEnter(){
            document.addEventListener('keypress', (ev) => {
                if(ev.keyCode === 13){
                    this.calculate();
                };
            })
        }
        ,

        btnParaDisplay(value){
            this.inputElement.value += value;
        },

        clearDisplay(){
            this.inputElement.value = ' ';
        },
        
        shiftDisplay(){
            this.inputElement.value = this.inputElement.value.slice(0,-1);
        },

        calculate(){
            this.inputElement.value = eval(this.inputElement.value);
        }
    };
}

const calculadora = criaCalculadora();

calculadora.constructor();