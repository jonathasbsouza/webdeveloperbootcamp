//isEven()
/* function isEven(num) {
    if(num % 2 !== 0) {
        return false;
    } else {
        return true;
    }
} */

function isEven(num) {
    return num % 2 === 0;
}

//factorial()
function factorial(num){
    var result = 1;
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}

//kebabToSnake()
function kebabToSnake(str) {
    if(str.indexOf("-") > 0) {
        var newStr = str.replace(/-/g, "_");
        return newStr;
    } return str;
}