let numbers = ['1', '2', '3'];
let equal = [1,1,1,1,1,1,1,1,1];
let numbers2 = [1,34,3456,2,33,378,9800,13,25];

function printReverse(array){
    for(let i = array.length; i>=0; i--){
        console.log(array[i]);
    }
}

function isUniform(array){
    for(let i = 1; i < array.length; i++) {
        if(array[i] !== array[0]){
            return false;
        }
    }
    return true;
}

//Sum Array

function sumArray(array){
    let soma = 0;
    array.forEach(function(item){
        soma += (+Number(item));
    });
    console.log(soma);
}

function sumArray2(array) {
    let soma = array.reduce((acc, crr) => acc + crr);
    console.log(soma);
  }


//Max number in array

function max(array){
    let maxNumber = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    console.log(maxNumber)
}
