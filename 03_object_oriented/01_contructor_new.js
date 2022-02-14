// property and method
/*
var person = {}
person.name = 'egoing'; // variance
person.introduce = function() {
    return 'my name is ' + this.name;
}
console.log(person.introduce()); // my name is egoing
*/
/*
var person = {
    'name' : 'egoing', 
    'introduce' : function(){
        return 'My name is ' + this.name; // not variance
    }
}
console.log(person.introduce()); // My name is egoing
*/

// constructor
/*
function Person(){}
var p = new Person(); // function is not logic pack but object constructor
p.name = 'egoing';
p.introduce = function(){
    return 'My name is ' + this.name;
}
console.log(p.introduce());
*/

/*
// not good
function Person(){}
var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is ' + this.name;
}
console.log(p1.introduce()); // My name is egoing

var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is ' + this.name;
}
console.log(p2.introduce()); // My name is leezche
*/

// good
function Person(name){ // constructor
    this.name = name; // property
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}
var p1 = new Person('egoing');
console.log(p1.introduce()); // My name is egoing
var p2 = new Person('leezche');
console.log(p2.introduce()); // My name is leezche
