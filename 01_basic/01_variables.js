
const accountId = 14453
let accountEmail = "susanta.mhanty3116@gmail.com"
var accountPassword = "12345"  //do not use 'var' becase its issue with the block scope { ..}
accountCity = "Puri"
let accountState  /// this will return as 'undefined' in console.table([])

//accountId = 2  // tried to change the const declared variable not allowed

console.log(accountId);


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
dont use var - it s issue with scope , blocke scope 
and functional scope

note use semicolon ; or dont use ; upto you 

do not use 'var'; to decalre variable , its issue with block scope
{

}
*/

"user strict"  // this treats all JS code as newer version --- 
/* now a days automatically it is "strict mode" */

//alert("hello;")

//alert(3 + 3)  // this line will give error  ''alert is not defined'--  


// becuase we are inside 'Node Js' and this can be used 
// this can be use in web browser developer console -- what ever we are writing in development console
// these are inside a document , the Java script engine is hide iside browser

// use 'pretier' extension for code indentation

//--- Data Types --///

let name ="Susanta "   // String
let Age = 40 // numeric   number 2, power 53  , // bigInt is another data type high , big numbers
let IsLoggedIn = false  // boolean 

//----- Premitive Data Types -------//
//number  -- numeric   number 2, power 53  ,
//bigint --
//string =""
//null  --> its data type and a stand alone Value temprature example '0' and 'null'
//undefined ---> value not defined 'let accountState' ex
//symbol ---> its useful in react, figma tools used , for uniqness use 

//----- Object Data Types ----//
//Oject 

console.log(typeof accountEmail)   //it will return string

console.log(typeof null);    // it will retrun as object, languae problem ,people says 

console.log(typeof undefined);  // this will return undefined



