//Q1
let numbers = [1, 2, 3, 4];
let newnumbers= [];
let oddnumbers=numbers.filter(number=>number % 2 !=0 );

function multi(oddnumbers){
   return oddnumbers*2;
}

let result=oddnumbers.map(multi);

//Q2

let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];
//to add the second array to the first
let tasks = monday.concat(tuesday);

// converted minutes to hours
let durations=[];
for (let i=0;i<tasks.length;i++){
    durations.push((tasks[i].duration)/60);
};
console.log(durations);

//logged only the durations which are less than two hours
let lessThanTwo = durations.filter(x => x < 2)
console.log(lessThanTwo);

// multiplied the hours with 20 which is her salary 
let salary = lessThanTwo.map(y => y*20);
console.log(salary);

// summed her salary
var total=0;
for(var i in salary){
    total += salary[i]; }

//printed the total with euro format.
console.log ( "The total is " + "\u20AC"+ total);
