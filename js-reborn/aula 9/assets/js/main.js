function main() {
    const dateElement = document.querySelector('h1');
    const date = new Date();
    const fullDate = createDateInformation(date);
    modifyWindowToSetDate(dateElement, fullDate);
}

function modifyWindowToSetDate(dateElement, fullDate) {
    const textNodeElement = document.createTextNode(`${fullDate.dayFullText}, ${fullDate.day} de ${fullDate.month} de ${fullDate.year} ${fullDate.hour}:${fullDate.minutes}`)
    const strongElement = document.createElement('strong');
    strongElement.appendChild(textNodeElement);
    dateElement.appendChild(strongElement);
}

function bringFullDay(day) {
    console.log(day);
    switch (day) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        default:
            return "";
    }
}

function bringFullMonth(month) {
    switch (month) {
        case 0:
            return "janeiro";
        case 1:
            return "fevereiro";
        case 2:
            return "março";
        case 3:
            return "abril";
        case 4:
            return "maio";
        case 5:
            return "junho";
        case 6:
            return "julho";
        case 7:
            return "agosto";
        case 8:
            return "setembro";
        case 9:
            return "outubro";
        case 10:
            return "novembro";
        case 11:
            return "dezembro";
        default:
            return "";
    }
}

function addZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
}
/**
 * 
 * @param {Date} date 
 */
function createDateInformation(date) {
    const fullDate = {
        dayFullText: "",
        day: 0,
        month: 0,
        year: 0,
        hour: 0,
        minutes: 0
    }
    fullDate.dayFullText = bringFullDay(date.getDay());
    fullDate.day = date.getDate();
    fullDate.month = bringFullMonth(date.getMonth());
    fullDate.year = date.getFullYear();
    fullDate.hour = addZero(date.getHours());
    fullDate.minutes = addZero(date.getMinutes());

    return fullDate;
}

main();