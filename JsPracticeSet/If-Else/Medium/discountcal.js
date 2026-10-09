let bill = prompt("Enter the bill amount");
let total = 0;

if (bill >= 1000) {
  total = bill - bill * 0.1;
  console.log("Total amount: " + total);
}
 else if (bill >= 5000) {
  total = bill - (bill * 0.2);
  console.log("Total amount: " + total);
}
else if (bill >= 10000) {
  total = bill - (bill * 0.3);
  console.log("Total amount: " + total);
}
else {
  console.log("No discount applicable.");
}
