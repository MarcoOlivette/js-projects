let a = [1,2,3];
let b = a;

a[0] = 33;

console.log(a,b);

let c = [...a];

a[2] = 'asdfasdf'

console.log(c,a,b)