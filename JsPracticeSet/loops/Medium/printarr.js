// let arr = [20, 56, 77, 34, 77];

// // for (const el of arr) {

// //     console.log(el)
    
// // }

// for ( let i = 0; i < arr.length; i++) {
//     console.log(i)
// }

// let i = 0;
// for (i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }


// let sum = 0;
// for ( let i = 0; i < arr.length; i++){
//      sum = sum + arr[i];
//     }
//     console.log(sum)

// let arr = [2, 4, 6, 8, 5,];
// let isPrime = true;

// if (arr > 0) {
//     isPrime = false

// } else {
//     for ( let i = 2; i < arr.length; i++) {
//         if ( arr % i === 0) {
//             isPrime = false 
//             break;
//         } else {
//             console.log(arr[i])
//         }
        
//     }
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];

// for ( let i = 0; i < arr.length; i+2){
//     if (i % 2 === 0) {
//         console.log(arr[i])
//     }
// }

let arr = [2, 5, 7, 3, 9];
let lar = 0;

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > lar) {
        lar = arr[i]
    }
}
console.log(lar)