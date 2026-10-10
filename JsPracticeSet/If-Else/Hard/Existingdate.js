let date = prompt("Enter a date (YYYY-MM-DD):");

let isleap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 );
let maxdays;

if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid date");
} else {
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        maxdays = 30;
    }
    else if (month ===2) {
        maxdays = isleap ? 29 : 28;
    }  
}    else {
    maxdays = 31;
} 



