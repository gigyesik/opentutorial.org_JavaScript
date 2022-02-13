// RegExp

var pattern = /a/
// var pattern = new RegExp('a'); // same to var pattern = /a/

console.log(pattern.exec('abcdef')); // [ 'a', index: 0, input: 'abcdef', groups: undefined ]
console.log(pattern.exec('bcdefg')); // null
console.log(pattern.test('abcdef')); // true
console.log(pattern.test('bcdefg')); // false

// String
console.log('abcdef'.match(pattern)); // [ 'a', index: 0, input: 'abcdef', groups: undefined ]
console.log('bcdefg'.match(pattern)); // null

console.log('abcdef'.replace(pattern, 'A')); //Abcdef

// Option
var xi = /a/;
console.log('Abcde'.match(xi)); // null
var oi = /a/i;
console.log('Abcde'.match(oi)); // [ 'A', index: 0, input: 'Abcde', groups: undefined ]
var xg = /a/;
console.log('abcdea'.match(xg)); // [ 'a', index: 0, input: 'abcdea', groups: undefined ]
var og = /a/g;
console.log('abcdea'.match(og)); // ['a', 'a']

// capture
var pattern = /(\w+)\s(\w+)/;
var str = 'coding everybody';
var result = str.replace(pattern, '$2, $1');
console.log(result); // everrybody coding

// replace
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = 'codingeverybody : http://opentutorials.org/course/1 . naver : http://naver.com . ';
var result = content.replace(urlPattern, function(url) {
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result); // codingeverybody : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a> . naver : <a href="http://naver.com">http://naver.com</a> .