// extend array 1
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
function getRandomValueFromArray(haystack) {
    var index = Math.floor(haystack.length * Math.random());
    return haystack[index];
}
console.log(getRandomValueFromArray(arr));

// extent array 2
Array.prototype.rand = function() {
    var index = Math.floor(this.length * Math.random());
    return this[index];
}
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
console.log(arr.rand());