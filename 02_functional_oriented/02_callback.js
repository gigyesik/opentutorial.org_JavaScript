/*
// method
a = {
    b:function() { // method
    }
};
*/

/*
// function can be element
function cal(func, num){
    return func(num)
}
function increase(num){
    return num + 1
}
function decrease(num){
    return num - 1
}

console.log(cal(increase, 1)); // 2
console.log(cal(decrease, 1)); // 0
*/

/*
// function can be return value
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
console.log(cal('plus')(2,1)); // 3
console.log(cal('minus')(2,1)); // 1
*/

/*
// function can be array value
var process = [
    function(input){return input + 10;},
    function(input){return input * input;},
    function(input){return input /2;}
];
var input = 1
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input); // ((1 + 10) ** 2) / 2 = 60.5
*/

// process commit (callback)
function sortNumber(a, b){
    return a - b;
}
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort(sortNumber));
