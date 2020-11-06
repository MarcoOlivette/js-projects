function main() {
    const listOfParagraphs = document.querySelectorAll('p');
    listOfParagraphs[1].style.backgroundColor
    modifyParagraphs(listOfParagraphs);

};

function modifyParagraphs(paragraphs){
    const bodyStyles = getComputedStyle(document.body);
    const backgroundColor = bodyStyles.backgroundColor;
    for(let p of paragraphs){
        p.style.backgroundColor= backgroundColor;
        p.style.color= '#FFFFFF';
    }
}

main();