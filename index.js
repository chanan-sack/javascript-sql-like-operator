"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function like(stringToMatch, likeCondition, matchPartial, caseSensitive) {
    //Set default values
    if (stringToMatch == undefined) {
        stringToMatch = "";
    }
    if (likeCondition == undefined) {
        likeCondition = "";
    }
    if (matchPartial == undefined) {
        matchPartial = false;
    }
    if (caseSensitive == undefined) {
        caseSensitive = true;
    }
    if (typeof stringToMatch != "string") {
        stringToMatch = stringToMatch.toString();
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
