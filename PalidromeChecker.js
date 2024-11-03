function PalidromeChecker(str) {
    // var reverse = str.split('').reverse().join('');
    // if(str === reverse) {
    //     return true;
    // } else {
    //     return false;
    // }
    const cleanedStr = str.replace(/\W/g, '').toLowerCase();

    const reverse = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reverse;

}

console.log(PalidromeChecker('racecar'));
console.log(PalidromeChecker('racecars'));