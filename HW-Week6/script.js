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