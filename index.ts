declare interface String {
    like(likeCondition : string, matchPartial?: boolean, caseSensitive?: boolean) : boolean;
}

String.prototype.like = function ( likeCondition: string, matchPartial?: boolean, caseSensitive?: boolean): boolean {

    if(matchPartial == undefined) {
        matchPartial = false;
    }
    if(caseSensitive == undefined) {
        caseSensitive = true;
    }
    
    //Escape regex characters from likeCondition
    likeCondition = likeCondition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    let thisString: string = this.toString();
    if(!caseSensitive){
         thisString = thisString.toUpperCase();
         likeCondition = likeCondition.toUpperCase();
    }

    let likeRegexString: string = likeCondition.replace(/\%/g,".*");

    if(!matchPartial) {
        likeRegexString = "^"+likeRegexString+"$";
    }
    
    let likeRegexPattern: RegExp = new RegExp(likeRegexString);
    
    if(likeRegexPattern.test(thisString)) {
        return true
    }
    return false;
};