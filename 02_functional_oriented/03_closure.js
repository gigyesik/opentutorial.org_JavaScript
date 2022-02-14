/*
// inner function
function outter() {
    function inner() {
        var title = 'coding everybody';
        console.log(title);
    }
    inner();
}
outter(); // coding everybody
*/

/*
// inner function 2
function outter() {
    var title = 'coding everybody'
    function inner() {
        console.log(title);
    }
    inner();
}
outter(); // coding everybody
*/

/*
// closure
function outter() {
    var title = 'coding everybody';
    return function() {
        console.log(title); // coding everybody
    }
}
inner = outter(); // 1
inner(); // 2
*/

/*
// closure 2
function factory_movie(title){ // outter function
    return {
        get_title : function () { // inner function
            return title;
        },
        set_title : function(_title) { // inner function
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title()); // Ghost in the shell
console.log(matrix.get_title()); // Matrix
ghost.set_title('in the shell');
console.log(ghost.get_title()); // in the shell
console.log(matrix.get_title()); // Matrix
*/

// closure 3
var arr = []
for(var i = 0; i < 5; i++) {
    arr[i] = function() {
        return i
    }
}
for(var index in arr) {
    console.log(arr[index]()); // 5 * 5
}

var arr = []
for(var i = 0; i < 5; i++) {
    arr[i] = function(id) {
        return function() {
            return id
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]()); // 0 1 2 3 4
}
