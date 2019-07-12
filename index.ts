export function like(stringToMatch: string, likeCondition : string, matchPartial?: boolean, caseSensitive?: boolean): boolean {
    if(matchPartial == undefined) {
        matchPartial = false;
    }
    if(caseSensitive == undefined) {
        caseSensitive = true;
    }
    
    //Escape regex characters from likeCondition
    likeCondition = likeCondition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    if(!caseSensitive){
        stringToMatch = stringToMatch.toUpperCase();
         likeCondition = likeCondition.toUpperCase();
    }

    let likeRegexString: string = likeCondition.replace(/\%/g,".*");

    if(!matchPartial) {
        likeRegexString = "^"+likeRegexString+"$";
    }
    
    let likeRegexPattern: RegExp = new RegExp(likeRegexString);
    
    if(likeRegexPattern.test(stringToMatch)) {
        return true
    }
    return false;
}