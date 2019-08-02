export function like(stringToMatch: string|number, likeCondition : string, matchPartial?: boolean, caseSensitive?: boolean): boolean {
    //Set default values
    if(stringToMatch == undefined) {
        stringToMatch = "";
    }
    if(likeCondition == undefined) { 
        likeCondition = "";
    }
    if(matchPartial == undefined) {
        matchPartial = false;
    }
    if(caseSensitive == undefined) {
        caseSensitive = true;
    }

    if (typeof stringToMatch != "string") {
        stringToMatch = stringToMatch.toString();
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