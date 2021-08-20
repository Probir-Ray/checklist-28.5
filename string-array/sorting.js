const numberList = [43, 345, 41, 35, 20, 242, 82382, 2893, 41500];
// console.log(numberList.sort((a, b) => a - b));
console.log(numberList.sort(function(a, b) {
    return a-b;
}));