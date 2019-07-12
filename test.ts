import { like } from './index';

console.log("Testing for string: \"Hey, how's it going?\"");
var searchString: string = "Hey, how's it going?";


console.log("true expected, Search string: \"Hey%going?\"");
console.log(like(searchString, "Hey%going?"));

console.log("true expected, Search string: \"%e%\"");
console.log(like(searchString, "%e%"));

console.log("true expected, Search string: \"%?\"");
console.log(like(searchString, "%?"));

console.log("true expected, Search string: \"%E%\"");
console.log(like(searchString, "%E%", false, false));

console.log("true expected, Search string: \"Hey%going\"");
console.log(like(searchString, "Hey%going", true, true));

console.log("true expected, Search string: \"HEY%It\"");
console.log(like(searchString, "HEY%It", true, false));

//False
console.log("false expected, Search string: \"Hey%going\"");
console.log(like(searchString, "Hey%going"));

console.log("false expected, Search string: \"%e\"");
console.log(like(searchString, "%e"));

console.log("false expected, Search string: \"%E%\"");
console.log(like(searchString, "%E%", false, true));

console.log("false expected, Search string: \"Hey%going\"");
console.log(like(searchString, "Hey%going", false, true));

console.log("false expected, Search string: \"HEY%It\"");
console.log(like(searchString, "HEY%It", true, true));