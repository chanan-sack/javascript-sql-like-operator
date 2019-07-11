import './index';

console.log("Testing for string: \"Hey, how's it going?\"");
var searchString: string = "Hey, how's it going?";


console.log("true expected, Search string: \"Hey%going?\"");
console.log(searchString.like("Hey%going?"));

console.log("true expected, Search string: \"%e%\"");
console.log(searchString.like("%e%"));

console.log("true expected, Search string: \"%?\"");
console.log(searchString.like("%?"));

console.log("true expected, Search string: \"%E%\"");
console.log(searchString.like("%E%", false, false));

console.log("true expected, Search string: \"Hey%going\"");
console.log(searchString.like("Hey%going", true, true));

console.log("true expected, Search string: \"HEY%It\"");
console.log(searchString.like("HEY%It", true, false));

//False
console.log("false expected, Search string: \"Hey%going\"");
console.log(searchString.like("Hey%going"));

console.log("false expected, Search string: \"%e\"");
console.log(searchString.like("%e"));

console.log("false expected, Search string: \"%E%\"");
console.log(searchString.like("%E%", false, true));

console.log("false expected, Search string: \"Hey%going\"");
console.log(searchString.like("Hey%going", false, true));

console.log("false expected, Search string: \"HEY%It\"");
console.log(searchString.like("HEY%It", true, true));