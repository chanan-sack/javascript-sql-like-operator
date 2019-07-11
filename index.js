"use strict";
String.prototype.like = function (likeCondition, matchPartial, caseSensitive) {
    if (matchPartial == undefined) {
        matchPartial = false;
    }
    if (caseSensitive == undefined) {
        caseSensitive = true;
    }
    //Escape regex characters from likeCondition
    likeCondition = likeCondition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    var thisString = this.toString();
    if (!caseSensitive) {
        thisString = thisString.toUpperCase();
        likeCondition = likeCondition.toUpperCase();
    }
    var likeRegexString = likeCondition.replace(/\%/g, ".*");
    if (!matchPartial) {
        likeRegexString = "^" + likeRegexString + "$";
    }
    var likeRegexPattern = new RegExp(likeRegexString);
    if (likeRegexPattern.test(thisString)) {
        return true;
    }
    return false;
};
