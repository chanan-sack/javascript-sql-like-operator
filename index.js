"use strict";
String.prototype.like = function (likeCondition) {
    var thisString = this.toString();
    //Escape regex characters from likeCondition
    likeCondition = likeCondition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    var likeRegexString = "^" + likeCondition.replace(/\%/g, ".*") + "$";
    var likeRegexPattern = new RegExp(likeRegexString);
    if (likeRegexPattern.test(thisString)) {
        return true;
    }
    return false;
};
