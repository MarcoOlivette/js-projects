function main() {
    const app = document.querySelector('.app');
    const windowObjects = [
        { tag: 'p', text: 'Frase 1' },
        { tag: 'div', text: 'Frase 2' },
        { tag: 'footer', text: 'Frase 3' },
        { tag: 'section', text: 'Frase 4' }
    ]

    createWindowsObjects(app, windowObjects);
}

function createWindowsObjects(app, windowObjects){

    windowObjects.forEach(element => {
        const tagElement = document.createElement(element.tag);
        const textElement = document.createTextNode(element.text);
        tagElement.appendChild(textElement);
        app.appendChild(tagElement);
    });

}

main();