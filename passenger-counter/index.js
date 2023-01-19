/*
initialize count to 0
listen for clicks on the increment button
change the count-el in the HTML to reflect the new count
*/
let countEl = document.getElementById("count-el");

let count = 0;
function increment() {
    count += 1;
    console.log(count);
    countEl.innerText = count;
}

function save() {
    console.log(count);
    console.log("I'm saving the people! " + count + " people saved!")
}

save();

// addEventListener("click", "count-el");


// function increment() {
//  count += 1;
// }

// increment();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// Create a function that logs out the sum
// of all the lap times

// function lapTimeSum() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }

// lapTimeSum();

// let lapsCompleted = 0;

// function oneAdditionalLap() {
//     lapsCompleted += 1;
// }

// oneAdditionalLap();
// oneAdditionalLap();
// oneAdditionalLap();

// console.log(lapsCompleted);