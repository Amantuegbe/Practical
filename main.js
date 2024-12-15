var school = "Gomycode";
var store = "Web Development";
var phoneNumber = 8060567308;
var maritalStatus = true;
var disability = null;

console.log(phoneNumber)
console.log(maritalStatus)

var x = 5
var y = 7
var z = 9
var a = y
var a = y + z
var c = y - z
var d = 100%30
console.log(d)
var e = a**4
console.log(e)
console.log(Math.sqrt(e))
console.log(Math.floor(4.6))
console.log(Math.ceil(4.6))
console.log(Math.PI)
console.log(Math.round(4.3))

var tpain = "Presido" 
var Atiku = " "

console.log(tpain && Atiku)

// Function
// A function is a block of code that is reusable that performs a specific task.
function greeting(){
    return console.log("Hello Everybody")
}
greeting();

function add(){
   return console.log (5+2)
}
add();

function profit(cp,sp){
    return console.log(sp-cp)
}

profit(10,4);

function percentageProfit(cp,sp){
    var profit = sp-cp;
    var percentProfit = (profit/cp)*100
    return console.log(percentProfit)
}

percentageProfit(5000, 11000)

function areaOfSquare(l){
    return console.log(l**2)
}

areaOfSquare(5)

function areaOfCircle(r){
    return console.log(Math.PI*r**2)
}

areaOfCircle(5)

function trapezium(a,b,h){
    return console.log((a+b/2)*h)
}

trapezium(2,5,3)

for(let i=0; i<5; i++){
    console.log("Hello World")
}

var numbers =[19,65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;

for(var i in numbers){
    sum += numbers[i];
}

console.log(sum)

var x = [9,45, 1, 2, 6, 1, 9, 9, 2, 1];
var y = 0;
for(var i in x){
    y += x[i]
}
console.log(y)

var a = [1,2,3,4,5,6,7,8,9];
var b = 0;
for(var i in a){
    b +=a[i]
}
console.log(b)
