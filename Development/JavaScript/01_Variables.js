const accountId = 144553;
let accountEmail = "rajkushwaha2410@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai"; //Not good practice.
let accountState;

// accountId = 2; // not allowed
accountEmail = "demo@gmail.com";
accountPassword = "2121345";
accountCity = "Jaipur";
console.log(accountId);

/* 
    Prefer not to use VAR
    because of issue in block scope and functional scope
 */
console.table( [accountEmail, accountId, accountPassword, accountCity, accountState]);