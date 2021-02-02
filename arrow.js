// function doubleIt(num) {         //calling function in 1st formula/
//     return num * 2
// }

// const doubleIt = function myFun(num) {           //calling function in 2nd formula/
//     return num * 2;
// }

const doubleIt = num => num * 2;         //calling function in 3rd formula " Arrow function"/
// const result = doubleIt(5)
// console.log(result);

const add = (x, y) => x + y;
// const adding = add(2, 2);
// console.log(adding);
// console.log(add(2, 2))
// const result = add(50, 70);
// console.log(result);

const give5 = () => 5;
const result2 = give5();
// console.log(result2);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const math = doMath(7, 5)
// console.log(doMath(5, 7));
console.log(math);