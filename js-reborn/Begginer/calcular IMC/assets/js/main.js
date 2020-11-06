function main() {
    const buttonElement = document.querySelector('button');
    buttonElement.addEventListener("click", (ev) => {
        ev.preventDefault()
        const imcValues = takeValuesFromInput(ev);
        const imcResult = calculateImc(imcValues);
        createImcWindowElement(imcResult);
    });
}

function takeValuesFromInput(form) {
    const values = {
        weight: 0,
        height: 0
    };
    const weightValue = document.querySelector('.weight').value;
    const heightValue = document.querySelector('.height').value;
    values.weight = weightValue;
    values.height = heightValue;
    return values;
}

function calculateImc(imc) {
    const values = {
        imc: 0,
        type: "",
        backgroundColor: "",
        color: ""
    }
    values.imc = (imc.weight / (imc.height ** 2)).toFixed(2);

    if (values.imc < 18.5) {
        values.type = "abaixo do peso";
        values.backgroundColor = "#ff0000";
        values.color = "white";
    }

    else if (values.imc >= 18.5 && values.imc <= 24.9) {
        values.type = "com o peso normal";
        values.backgroundColor = "#64ff4c";
        values.color = "black";
    }

    else if (values.imc >= 25 && values.imc <= 29.9) {
        values.type = "com sobrepeso";
        values.backgroundColor = "#f58d05";
        values.color = "black";
    }

    else if (values.imc >= 30 && values.imc <= 34.9) {
        values.type = "com obesidade grau 1";
        values.backgroundColor = "#f58d05";
        values.color = "black";
    }

    else if (values.imc >= 35 && values.imc <= 39.9) {
        values.type = "com obesidade grau 2";
        values.backgroundColor = "#f56d05";
        values.color = "black";
    }

    else if (values.imc >= 40) {
        values.type = "com obesidade grau 3";
        values.backgroundColor = "#ff0000";
        values.color = "white";
    }
    return values;
}


function createImcWindowElement(values){
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = "";
    const sectionElemente = document.querySelector('section');
    const textNodeElement = document.createTextNode(`imc : ${values.imc}, portanto esta pessoa está ${values.type}`);
    resultElement.style.backgroundColor = values.backgroundColor;
    resultElement.style.color = values.color;
    resultElement.appendChild(textNodeElement);
}

main()