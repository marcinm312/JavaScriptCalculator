function addition() {
    let a = parseFloat(document.forms["calculator"].elements["a"].value);
    let b = parseFloat(document.forms["calculator"].elements["b"].value);
    let c = a + b;
    document.getElementById("result").innerHTML = c;
}

function subtraction() {
    let a = parseFloat(document.forms["calculator"].elements["a"].value);
    let b = parseFloat(document.forms["calculator"].elements["b"].value);
    let c = a - b;
    document.getElementById("result").innerHTML = c;
}

function multiplication() {
    let a = parseFloat(document.forms["calculator"].elements["a"].value);
    let b = parseFloat(document.forms["calculator"].elements["b"].value);
    let c = a * b;
    document.getElementById("result").innerHTML = c;
}

function division() {
    let a = parseFloat(document.forms["calculator"].elements["a"].value);
    let b = parseFloat(document.forms["calculator"].elements["b"].value);
    let c = a / b;
    document.getElementById("result").innerHTML = c;
}

function modulo() {
    let a = parseFloat(document.forms["calculator"].elements["a"].value);
    let b = parseFloat(document.forms["calculator"].elements["b"].value);
    let c = a % b;
    document.getElementById("result").innerHTML = c;
}

function exponentiation() {
    let a = parseFloat(document.forms["calculator"].elements["a"].value);
    let b = parseFloat(document.forms["calculator"].elements["b"].value);
    let c = Math.pow(a, b);
    document.getElementById("result").innerHTML = c;
}

function squareRoot() {
    let d = parseFloat(document.forms["other"].elements["d"].value);
    let e = Math.sqrt(d);
    document.getElementById("result").innerHTML = e;
}

function logarithm() {
    let d = parseFloat(document.forms["other"].elements["d"].value);
    let e = Math.log(d);
    document.getElementById("result").innerHTML = e;
}