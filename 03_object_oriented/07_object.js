// Object
var grades = {'egoing' : 10, 'k8805' : 6, 'sorialgi' : 80};

// Object extension
Object.prototype.contain = function(neddle) {
    for(var name in this) {
        if(this[name] === neddle) {
            return true;
        }
    }
    return false;
}

var o = {'name' : 'egoing', 'city' : 'seoul'};
console.log(o.contain('egoing')); // True
var a = ['egoing', 'leezche', 'grapttie'];
console.log(a.contain('leezche')); // True

// not good Object extension
for(var name in o) {
    console.log(name); // name, city, contain
}

// hasOwnProperty
for(var name in o) {
    if(o.hasOwnProperty(name)) {
        console.log(name) // name, city. [if prototype, return fail]
    }
}