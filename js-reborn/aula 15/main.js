// // function random(){
// //     return Math.floor((Math.random() * 100));
// // }

// // let i = 0;
// // while(random() !== 59){
// //     console.log(i++);
// // }

// let i = 0;
// while(i < 10){
//     console.log('a');
//     console.log(i);
//     i++;
//     if(i % 2 === 0){
//         console.log('b');
//     }else{
//         continue;
//     }

//     console.log('c');
// }

function maiorDeTres(vet){
    for(let i = 0; i < vet.length; i++){
        if(vet[i] > vet[i+1]){
            let temp = vet[i+1];
            vet[i+1] = vet[i];
            vet[i] = temp; 
        }
    }
    return vet;
}

const vet = [1,5,3,123,5,5,23,54,23,51,41,43,425,2351,2,54];
console.log(vet);
const vet1 = maiorDeTres(vet);
console.log(vet1);
const vet2 = maiorDeTres(vet1);
console.log(vet2);
const vet3 = maiorDeTres(vet2);
console.log(vet3);