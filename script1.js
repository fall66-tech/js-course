function add(a, b){
    return a+b;
}

function divide(a, b) {
    return a/b;
}

// one way
function calculate(x, y, operation) {
    let r = operation(x, y);
    console.log(r)
}
calculate(15, 5, add);
console.log(calculate(10, 5, divide));