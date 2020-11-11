const array = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]
let novo = array;

console.log(novo)


array.pop();

console.log(novo)

novo = [...array];
console.log(novo)

array.pop();

console.log(novo)
console.log(array)

array.unshift('asdf');
console.log(array)

array.push('asdf');
console.log(array)

array.pop();
console.log(array)

array.shift();
console.log(array)