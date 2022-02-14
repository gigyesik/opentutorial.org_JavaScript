/*
// array argument (in fact, argument object instance)
function sum() {
    var i, _sum = 0;
        for(i = 0; i < arguments.length; i++) {
            console.log(i+ ' : ' + arguments[i]);
            _sum += arguments[i];
            }
            return _sum;
    }
console.log('result : ' + sum(1,2,3,4));
*/

// parameter
function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}

zero(); // zero.length 0 arguments 0
one('var1', 'var2'); // one.length 1 arguments 2
two('var1'); // two.length 2 arguments 1
