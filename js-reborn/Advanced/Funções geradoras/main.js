function* geradora() {
    let i = 0;
    while(true){
        yield i++;
    }
}

const g1 = geradora();

console.log(g1.next().value)
