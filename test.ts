import './index';

console.log("Testing for string: \"Hey, how's it going?\"");
var searchString: string = "Hey, how's it going?";


console.log("true expected, Search string: \"Hey%going?\"");
console.log(searchString.like("Hey%going?"));

console.log("true expected, Search string: \"%e%\"");
console.log(searchString.like("%e%"));

console.log("true expected, Search string: \"%?\"");
console.log(searchString.like("%?"));


console.log("false expected, Search string: \"Hey%going\"");
console.log(searchString.like("Hey%going"));

console.log("false expected, Search string: \"%e\"");
console.log(searchString.like("%e"));