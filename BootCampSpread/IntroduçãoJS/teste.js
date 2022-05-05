function returnevenvalues(array) {
    let NUMS = [];
    for (let i = 0; i < array.length; i++)
    if(array[i] % 2 == 0) {
        NUMS.push(array[i])
    } else {
        console.log(`${array[i]} NÃO É PAR`)
    }
console.log(NUMS)
}
let array = [1,2,4,5,7,8];

returnevenvalues(array);