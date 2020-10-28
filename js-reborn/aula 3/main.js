let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const vet = [varA, varB, varC] = [varB, varC, varA]

console.log(vet.map(i => console.log(i)))