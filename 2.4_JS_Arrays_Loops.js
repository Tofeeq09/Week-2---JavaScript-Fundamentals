/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 1:`);

let favoriteFilms = [
    "The Shawshank Redemption",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
    "Inception"
];

favoriteFilms.push(
    "The Matrix",
    "Forrest Gump"
);

for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(`Film ${i + 1}: ${favoriteFilms[i]}`);
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 2:`);

for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(`Random Number ${i + 1}: ${randomNumber}`);
};
// Math.floor(Math.random() * 50) = 0 to 49
// Math.ceil(Math.random() * 50) = 1 to 50
// Math.round(Math.random() * 50) = 0 to 50

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 3:`);

for (let i = 9; i >= 0; i--) {
    console.log(i);
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 4:`);

for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(`Film ${i + 1}: ${favoriteFilms[i]}`);
};

if (favoriteFilms[2] === "Ghostbusters") {
    console.log("Yay, it's Ghostbusters!");
} else {
    console.log("Boo! We want Ghostbusters.");
};


/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 5:`);

for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 30) + 1;

    if (randomNumber % 7 === 0) {
        console.log(`${randomNumber} is divisible by 7.`);
    } else {
        console.log(`${randomNumber} is not divisible by 7.`);
    }
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 6:`);

const bobsFollowers = [
"Alice",
"Bob",
"Charlie",
"David"
];

const hannahsFollowers = [
"Bob",
"Eve",
"Charlie",
"Frank"];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(`Mutual follower: ${bobsFollowers[i]}`);
        }
    }
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 7:`);

console.log("While Loop")
let i = 0;
console.log(`i=${i}`)
while (i < 5) {
    console.log(`Iteration ${i + 1}`);
    i++;
};
console.log(`i=${i}`) // At this point, i = 5

console.log("Do While Loop")
i = 0; // Reset i to 0
console.log(`i=${i}`)
do {
    console.log(`Iteration ${i + 1}`);
    i++;
} while (i < 5);
console.log(`i=${i}`)


////////////////////////
////////////////////////
// For Loop Advantages:

// 1. Structured for Known Iterations:
// For loops are specifically designed for scenarios where you know exactly how many times the loop should execute.
// This count-based structure makes them ideal for iterating over arrays, lists, or sequences of known length.

// 2. Efficiency and Readability:
// The initialization, condition, and update statements are all contained within the loop's header, making the code compact and organized:
// for (initialization; condition; update) {
//     // code to execute
// }
// This often leads to more efficient execution and easier code comprehension.

// 3. Multiple Initialization and Updates:
// For loops allow multiple variables to be initialized and updated within the header, providing flexibility for handling multiple counters or values.


// For Loop Disadvantages:

// 1. Not Suitable for Unknown Iterations:
// If you don't have a predetermined number of iterations, a for loop might not be the best choice.
// While loops are better suited for scenarios where the loop's continuation depends on a condition rather than a fixed count.

// 2. Potential for Infinite Loops (Less Common):
// While less common than with while or do-while loops, for loops can still lead to infinite loops if the condition is not updated correctly within the loop body or if the update statement doesn't progress towards termination.


// Use for loops when you know the exact number of iterations beforehand, such as when working with arrays or fixed sequences.
// Leverage their efficiency and readability for count-based operations.
// Consider other loop types if the number of iterations is unknown or depends on a condition rather than a counter.
// Be mindful of the potential for infinite loops, although it's less common with for loops compared to other loop structures.

////////////////////////
////////////////////////
// While Loop Advantages:

// 1. Flexibility for Unknown Iterations:
// While loops excel in situations where you don't have a predetermined number of repetitions.
// They continue executing as long as a specified condition remains true, making them adaptable to various scenarios.

// 2. Simplicity and Readability:
// The structure of a while loop is straightforward:
// while (condition) {
//     // code to execute
// }
// This simplicity often makes them easier to understand and implement, especially for beginners.


// While Loop Disadvantages:

// 1. Risk of Infinite Loops:
// If the condition within the while loop never becomes false, the loop will continue indefinitely, potentially freezing or crashing the program.
// Programmers must carefully design loop conditions and ensure they're updated appropriately within the loop body to avoid this pitfall.

// 2. Initialization and Update Outside the Loop:
// The statements that initialize variables and update them for the loop's condition reside outside the loop's syntax.
// This can sometimes lead to less readable code and potential errors if not handled carefully, as it separates those actions from the loop's main logic.


// Use while loops when you don't know the exact number of iterations in advance but have a condition to determine when to stop.
// Be mindful of the risk of infinite loops and ensure proper condition updates within the loop body.
// Consider code readability and potential for errors when handling initialization and update statements outside the loop's syntax.


////////////////////////
////////////////////////
// Do While Loop Advantages:

// 1. Guaranteed Execution:
// The defining characteristic of do-while loops is that the loop body is always executed at least once, even if the condition is initially false.
// This makes them suitable for scenarios where you need to perform an action before checking a condition.

// 2. Ideal for User Input Validation:
// Do-while loops are often used in user input scenarios where you need to prompt the user at least once, even if their initial input is invalid.
// The loop ensures that the user is always given a chance to provide valid input.


// Do While Loop Disadvantages:

// 1. Potential for Infinite Loops:
// Like other loops, do-while loops can lead to infinite loops if the condition is not updated correctly within the loop body.
// It's crucial to ensure that the condition eventually becomes false to terminate the loop.

// 2. Less Common and Familiar:
// Do-while loops are used less frequently than while and for loops in programming, making them less familiar to some developers.

// 3. Readability Considerations:
// The structure of a do-while loop, with the condition check at the end, can sometimes make the code less readable, as it's less immediately clear what determines the loop's continuation.


// Use do-while loops when you need the loop body to execute at least once, regardless of the initial condition.
// Be mindful of the risk of infinite loops and ensure proper condition updates.
// Consider code readability and the potential unfamiliarity of do-while loops among some developers.

////////////////////////
////////////////////////