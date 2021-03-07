// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt('Enter a number'));
if (num % 2 === 0) {
  alert('Number is even');
}
else {
  alert('Number is odd');
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt('Enter value of number 1'));
let num2 = Number(prompt('Enter value of number 2'));
if (num1 > num2) {
  alert(`${num1} is greater than ${num2}`);
}
else {
  alert(`${num2} is greater than ${num1}`);
}

// 3. Convert the above code using`?` terniary operator

num1 > num2 ? 
alert(`${num1} is greater than ${num2}`) 
: 
alert(`${num2} is greater than ${num1}`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt('Please enter your House Name');
if (houseName === "stark") {
  alert('Winter is coming');
}
else if(houseName === "lannister") {
  alert('A Lannister always pays his debts');
}
else {
  alert('All men must die');
}

// 5. Convert the above code using`?` terniary operator

houseName === "stark" ?
alert('Winter is coming')
:
houseName === "lannister" ?
alert('A Lannister always pays his debts')
:
alert('All men must die')

// Switch

switch(houseName) {
  case ("stark"): 
    alert('Winter is coming');
    break;
  case ("lannister"):
    alert('A Lannister always pays his debts');
    break;
  default:
    alert('ALl men must die');
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthNum = Number(prompt("Enter the month name"));
if ((monthNum >= 1) && (monthNum <= 12) && (monthNum != 2)) {
  if (monthNum % 2 == 0)  {
    alert('The number of days in this month is 30');
  }
  else {
    alert('The number of days in this month is 31');
  }
}
else if (monthNum == 2) {
  alert('The number of days in this month is 28');
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let totalSalary = Number(prompt('Enter the total salary'));
if (totalSalary <=20000) {
  let inHand = totalSalary - (10 * totalSalary)/100;
  alert(`'In Hand salary is' ${inHand}`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

// If-Else

let marks = Number(prompt('Enter the marks obtained'));
if (marks > 100) {
  alert(`"Marks can't be greater than 100"`);
}
else if ((marks > 80) && (marks < 100)) {
  alert(`Grade A`);
}
else if ((marks > 50) && (marks < 80)) {
  alert(`Grade B`);
}
else if ((marks > 30) && (marks < 50)) {
  alert(`Grade C`);
}
else if (marks >= 0) {
  alert(`Grade D`);
}

// Switch

switch(marks) {
  case (marks > 100): 
    alert(`"Marks can't be greater than 100"`);
    break;
  case ((marks > 80) && (marks < 100)):
    alert(`Grade A`);
    break;
  case ((marks > 50) && (marks < 80)):
    alert(`Grade B`);
    break;
  case ((marks > 30) && (marks < 50)):
    alert(`Grade C`);
    break;
  case (marks >= 0):
    alert(`Grade D`);
  default:
    alert('Invalid number');
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?`);
if (weather == "sunny") {
  alert('Wear a T-shirt');
}
else if(weather == "rainy") {
  alert(`Dont't forget to take a raincoat`);
}
else if (weather == "freezing") {
  alert('Get your sweater on');
}
else {
  alert('Not a valid input');
}