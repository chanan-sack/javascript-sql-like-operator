"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function like(stringToMatch, likeCondition, matchPartial, caseSensitive) {
    if (matchPartial == undefined) {
        matchPartial = false;
    }
    if (caseSensitive == undefined) {
        caseSensitive = true;
    }
    //Escape regex characters from likeCondition
    likeCondition = likeCondition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    if (!caseSensitive) {
        stringToMatch = stringToMatch.toUpperCase();
        likeCondition = likeCondition.toUpperCase();
    }
    var likeRegexString = likeCondition.replace(/\%/g, ".*");
    if (!matchPartial) {
        likeRegexString = "^" + likeRegexString + "$";
    }
    var likeRegexPattern = new RegExp(likeRegexString);
    if (likeRegexPattern.test(stringToMatch)) {
        return true;
    }
    return false;
}
exports.like = like;
