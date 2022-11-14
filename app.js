// Chapter # 1
// Alert

// alert("Error! Please Enter a Valid Password.")
// alert("Welcome to JS land....")
// window.alert("Hello.. I can run JS through my Web Browse's console")

// Chapter # 2
// Variable & Strings

// var username = "John Doe"  
// alert(username)

// var yourage = "15 years old"  
// alert(yourage)

// var service = "Certified Mobile Application Development"  
// alert(service)

// Chapter # 3
// var age = "i am 15 years old"
// alert(age)

// var num = "You have visited this site 14 time"
// alert(num)

// Chapter # 4 html file

// chapter  # 5
// var a = 5
// var b = 3
// var c = a + b
// console.log(c)

// var a = 5
// var b = 3
// var c = a - b
// console.log(c)

// var a = 5
// var b = 3
// var c = a * b
// console.log(c)

// var a = 5
// var b = 3
// var c = a / b
// console.log(c)

// var a = 5
// var b = 3
// var c = a % b
// console.log(c)

// // table
// for (var i = 0; i < 10; i++){
//     console.log("4 X " + (i + 1) + " = " + 4 * (i + 1))  
// }

// chapter 6-9
// var a = 10
// ++a  
// a++
// --a
// a--
// console.log(a)

// var a = 2
// var b = 1
// var result = --a - -- b + ++b + b--
// // first a = 2 so --a a=1
// // and
// // first b = 1 --b b=0 and ++b so b=1 
// console.log(result);



// Chapter 9-11
// var City = prompt("Enter Your City", "karachi")
// console.log(City)

// var gender = prompt("gender");
// if (gender == "male") {
//     console.log("Good Morning Sir");
// }
// else {
//     console.log("Good Morning Mam")
// }

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("true");
// }
// if (false) {
//     alert("false");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// var maths = +prompt("maths marks")
// var English = +prompt("English marks")
// var Urdu = +prompt("Urdu marks")

// var obtained = maths+English+Urdu;
// var totalmarks = 300 

// var percentage = (obtained / totalmarks * 100)
// console.log(percentage)

// console.log(obtained / totalmarks * 100)

// if (percentage > 80 ){
//     console.log("A-One")
// }
// else if(percentage > 70){
//     console.log("A")
// }
// else if(percentage > 60){
//     console.log("B")
// }
// else if(percentage < 60){
//     console.log("Fail")
// }


// Chapter 12-13
// var time = prompt("Time")
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }
// else if(time >= 2100 && time < 2400){
//     alert("Good Night")
// }

// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

if(ch >= "A" && ch <= "Z" )