const f1 = (callback) => {
    setTimeout(
        () => {
            console.log('f1');
            if (callback) {
                callback();
            }
        }, 1000);
}

const f2 = (callback) => {
    setTimeout(
        () => {
            console.log('f2');
            if (callback) {
                callback();
            }
        }, 1000);
}

const f3 = (callback) => {
    setTimeout(
        () => {
            console.log('f3');
            if (callback) {
                callback();
            }
        }, 1000);
}

const f1Callback = () => {
    f2(f2Callback);
}

const f2Callback = () => {
    f3(f3Callback);
}

const f3Callback = () => {
    console.log('Execução na ordem correta');
}

f1(f1Callback);