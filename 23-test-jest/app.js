function sum (a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b
    }else{
        throw new TypeError('wrong parameters data type')
    }
}
console.log(sum(1,3));

function arraySum(arr){
    let numSum = 0;
    arr.forEach(element=>{
        numSum= sum(numSum, element)
    });
    return numSum;
}


module.exports = {
    sum,
    arraySum
}