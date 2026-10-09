let time = prompt("Enter the time in 24- hour format (HH:MM)");

if (time >= "00:00" && time < "12:00") {
    console.log("Good Morning");
}
else if (time >= "12:00" && time < "18:00") {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}