let score = 33

console.log(typeof score); //number
console.log(typeof (score)); // number /// you can also write it as a method

let score1 = "33"
console.log(typeof score1);  // returns string
console.log(typeof (score1)); //returns string

let valueNumber = Number(score1);  // class based so intitial capital 'N'
console.log(typeof valueNumber); // it will retun as number , converted to number

let score2 ="33abc"
let value1 = Number(score2);
console.log(typeof value1);  // this will print as a number .. which is wrong 
//so let check the value of the variable
console.log(value1);  // this will retrun as NaN   not a number


let score3 = null
console.log(typeof score3);  /// this will return as object

let makenumber = Number(score3);
console.log(typeof makenumber);  // this will display 'number'
console.log(makenumber);  // this will display as '0'


let score4 = undefined
console.log(typeof score4);  /// this will return as 'undefined'

let makenumber1 = Number(score4);
console.log(typeof makenumber1);  // this will display 'number'
console.log(makenumber1);  // this will display as 'NaN'



let score5 = true
console.log(typeof score5);  /// this will return as 'boolean'

let makenumber2 = Number(score5);
console.log(typeof makenumber2);  // this will display 'number'
console.log(makenumber2);  // this will display as '1'

let isLoggedIn = 1
console.log(typeof isLoggedIn);  // this will return 'number'
let boolval = Boolean(isLoggedIn);
console.log(typeof boolval);  // this will return 'boolean'
console.log(boolval);  /// this will return 'true'


// "" => false





