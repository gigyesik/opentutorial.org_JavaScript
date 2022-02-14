// inheritance (by prototype)
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra;

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp); // true (prototype chain)