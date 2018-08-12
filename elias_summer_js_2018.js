alert("Hello");
alert("We are doing 2 number multiplication");
var a = prompt("What is the first number you are going to multiply.");
console.log(a + " This is a in multiplication");
var b = prompt("What is the second number you are going to multiply.");
console.log(b + " This is b in multiplication");
var c = a * b;
console.log(c + " This is c in multiplication");
alert("The answer is " + c + ".");

alert("Do you want to do more?");
var d = prompt("What do you want to do now (simple math operation, + - * /)?");

while (d === "+") {
    var e = prompt("What is the first number you are going to add?");
    console.log(e + ". This is e in addition");
    var f = prompt("What is the second number you are going to add?");
    console.log(f + " .This is the second number in the addition");
    var g = parseInt(e) + parseInt(f);
    console.log(g + " .This is the sum");
    alert("The answer is " + g + " .");
    alert("Do you want to do more?");
    var d = prompt("What do you want to do now (simple math operation, + - * /)?");
};

while (d === "-") {
    var h = prompt("What is the first number you are going to subtract?");
    console.log(h + " . This is the first subtraction number");
    var i = prompt("What is the second number you are going to add?");
    console.log(i + ". This is the second number in the problem");
    var j = h - i;
    console.log(j + ". This is the answer");
    alert("The answer is " + j + " .");
    alert("Do you want to do more?");
    var d = prompt("What do you want to do now (simple math operation, + - * /)?");
};

while (d === "*") {
    var k = prompt("What is the first number you are going to multiply?");
    console.log(k + " This is k in multiplication");
    var l = prompt("What is the second number you are going to multiply?");
    console.log(l + " This is l in multiplication");
    var m = k * l;
    console.log(m + " This is m in multiplication(result).");
    alert("The answer is " + m + ".");
    alert("Do you want to do more?");
    var d = prompt("What do you want to do now (simple math operation, + - * /)?");
};

while (d === "/") {
    var n = prompt("What is the first number you are going to divide?")
    console.log(n + ". This is the first number in the division.");
    var o = prompt("Enter the second number in the division problem");
    console.log(o + " . This is the second entered number in the division problem.");
    var p = n / o;
    console.log(p + ". This is the answer of division");
    alert("The answer is " + p + ".");
    alert("Do you want to do more?");
    var d = prompt("What do you want to do now (simple math operation, + - * /)?");
};
