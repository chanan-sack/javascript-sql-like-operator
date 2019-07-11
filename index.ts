declare interface String {
    like(likeCondition : string) : boolean;
}

String.prototype.like = function ( likeCondition: string ): boolean {
    let thisString: string = this.toString();

    //Escape regex characters from likeCondition
    likeCondition = likeCondition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    let likeRegexString: string = "^"+likeCondition.replace(/\%/g,".*")+"$";
    let likeRegexPattern: RegExp = new RegExp(likeRegexString);
    
    if(likeRegexPattern.test(thisString)) {
        return true
    }
    return false;
};