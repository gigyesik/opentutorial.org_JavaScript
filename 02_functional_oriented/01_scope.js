/*
// example
var vscope = 'global';
function fscope() {
    console.log(vscope);
}
fscope();
*/

/*
// global, local
var vscope = 'global';
function fscope() {
    var vscope = 'local';
    console.log('in ' + vscope); // in local
}
fscope();
console.log('out ' + vscope); // out global
*/

/*
// var
var vscope = 'global';
function fscope() {
    vscope = 'local'; // if not use var, it is global variation
    console.log('in ' + vscope); // in local
}
fscope();
console.log('out ' + vscope); // out local
*/

/*
// usage of local var
function a () {
    var i = 0;
}
for(var i = 0; i < 5; i++){
    a();
    console.log(i);
}
*/

/*
// usage of global var (infinite loop)
function a () {
    i = 0;
}
for(i = 0; i < 5; i++){
    a();
    console.log(i);
}
*/

/*
// usage of global var (character of object)
MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

console.log(sum());
*/

/*
// usage of global var (anonymous function)
(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null,
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum());
}())
*/

/*
// scope only function
for(var i = 0; i < 1; i++) {
    var name = 'coding everybody'
}
console.log(name); // coding everybody (not function)
*/

// static(lexical) scoping
var i = 5;

function a() {
    var i = 10; 
    b(); // 5
}

function b() {
    console.log(i); // already 5
}

a(); // 5
