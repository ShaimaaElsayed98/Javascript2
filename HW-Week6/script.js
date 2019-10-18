//Q1

function foo(bar) {
}
function bar() {
console.log('Hello, I am bar!');
}
foo(bar);

//Q2

function threeCallback (){
    console.log("divisble by three")
}
function fiveCallback (){
    console.log("divisble by five")
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const array=[];
    for(let i=startIndex; i<=stopIndex; i++){
        array.push(i)
        if(i%3 === 0){
            threeCallback();
        }
        if(i%5 === 0){
            fiveCallback();
        }
    }
    console.log(array);
}


threeFive(10, 15, threeCallback, fiveCallback);

//Q3,4,5 THE LINKS DIDNT WORK, IT SAID PAGE NOT FOUND

//Q7

let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);  //it printed x as it just consoled log the value of x not the function

let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y); //it printed x=10, as y is an object and x is a key inside it the function saved a new value for x as a key.
