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
    const daysOfWeek = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    return daysOfWeek[day];
}

function bringFullMonth(month) {

    const monthOfTheYear = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    return monthOfTheYear[month];
}

function addZeroToLeft(num) {
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
    fullDate.hour = addZeroToLeft(date.getHours());
    fullDate.minutes = addZeroToLeft(date.getMinutes());

    return fullDate;
}

main();