function* geradora() {
    let i = 0;
    while(true){
        yield i++;
    }
}

const g1 = geradora();

console.log(g1.next().value)

function* geradora1(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora2(){
    yield* geradora1();
    yield 4;
    yield 5;
}

const g = geradora2();

for(let i of g){
    console.log(i);
}