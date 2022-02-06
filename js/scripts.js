function addition() {
    const a = parseFloat(document.forms["calculator"].elements["a"].value);
    const b = parseFloat(document.forms["calculator"].elements["b"].value);
    const c = a + b;
    document.getElementById("result").innerHTML = c;
}

function subtraction() {
    const a = parseFloat(document.forms["calculator"].elements["a"].value);
    const b = parseFloat(document.forms["calculator"].elements["b"].value);
    const c = a - b;
    document.getElementById("result").innerHTML = c;
}

function multiplication() {
    const a = parseFloat(document.forms["calculator"].elements["a"].value);
    const b = parseFloat(document.forms["calculator"].elements["b"].value);
    const c = a * b;
    document.getElementById("result").innerHTML = c;
}

function division() {
    const a = parseFloat(document.forms["calculator"].elements["a"].value);
    const b = parseFloat(document.forms["calculator"].elements["b"].value);
    const c = a / b;
    document.getElementById("result").innerHTML = c;
}

function modulo() {
    const a = parseFloat(document.forms["calculator"].elements["a"].value);
    const b = parseFloat(document.forms["calculator"].elements["b"].value);
    const c = a % b;
    document.getElementById("result").innerHTML = c;
}

function exponentiation() {
    const a = parseFloat(document.forms["calculator"].elements["a"].value);
    const b = parseFloat(document.forms["calculator"].elements["b"].value);
    const c = Math.pow(a, b);
    document.getElementById("result").innerHTML = c;
}

function squareRoot() {
    const d = parseFloat(document.forms["other"].elements["d"].value);
    const e = Math.sqrt(d);
    document.getElementById("result").innerHTML = e;
}

function logarithm() {
    const d = parseFloat(document.forms["other"].elements["d"].value);
    const e = Math.log(d);
    document.getElementById("result").innerHTML = e;
}