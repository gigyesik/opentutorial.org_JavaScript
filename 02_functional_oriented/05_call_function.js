/*
// basic call
function func() {
    console.log('call')
}
func(); // call
*/

/*
// function is object Function's instance (inherit method)
function sum(arg1, arg2) {
    return arg1 + arg2;
}
console.log(sum.apply(null, [1,2])); // 3
*/

// apply
o1 = {var1:1, var2:2, var3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
console.log(sum.apply(o1)); // 6
console.log(sum.apply(o2)); // 185
/*
o1.sum = sum;
console.log(o1.sum());
delete o1.sum();
*/