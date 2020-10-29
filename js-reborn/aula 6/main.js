function meuEscopo() {
    const form = document.querySelector('.form');
    const pessoas = [];
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const hrElement = document.createElement('hr');

        const name = form.querySelector('.name');
        const lastName = form.querySelector('.lastName');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');
        const appElement = document.querySelector('#app');

        const values = [
            name.value
            , lastName.value
            , weight.value
            , height.value
        ]

        pessoas.push({
            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value,
        })

        values.forEach(element => {
            const spanElement = document.createElement('span');
            const brElement = document.createElement('br');
            const textNodeElement = document.createTextNode(element);
            spanElement.appendChild(textNodeElement);
            appElement.appendChild(brElement);
            appElement.appendChild(spanElement);
        });

        console.log(pessoas);
        appElement.appendChild(hrElement);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();